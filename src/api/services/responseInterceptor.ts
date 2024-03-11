import { AxiosError, AxiosResponse } from 'axios';
import { API, apiRoutes, renewToken } from '..';
import { getToken, storage } from '../../utils';
import { store } from '../../app/store';
import { logout } from '../../app/features/authSlice';

interface IResponseData {
    data: unknown;
}

const HTTP_STATUS = {
    SUCCESS: 200,
    INFORMATION: 300,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    CONFLICT: 409,
    SERVER_ERROR: 500,
};

export const onResponse = (response: AxiosResponse<IResponseData>) => {
    return Promise.resolve(response.data.data as AxiosResponse);
};

export const onResponseError = async (error: AxiosError) => {
    const failedRequest = error.config;
    if (
        error.response?.status === HTTP_STATUS.UNAUTHORIZED &&
        failedRequest &&
        !failedRequest._retry
    ) {
        // Set the _retry flag to true to indicate that the request will be retried
        failedRequest._retry = true;

        // Check if it's a sign-in request, if yes no need to renew token
        if (failedRequest.url?.includes(apiRoutes.signIn)) {
            return Promise.reject(error);
        }

        const refreshToken = getToken('refreshToken');
        if (!refreshToken) {
            store.dispatch(logout());
            return Promise.reject(error);
        }

        try {
            const response = await renewToken(refreshToken);
            storage.setItem('accessToken', response.accessToken);
            storage.setItem('refreshToken', response.refreshToken);

            failedRequest.headers[
                'Authorization'
            ] = `Bearer ${response.accessToken}`;

            // Retry the failed request with the new access token
            return API(failedRequest);
        } catch (error) {
            store.dispatch(logout());
        }
    }

    return Promise.reject(error);
};
