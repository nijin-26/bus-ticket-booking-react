import { AxiosError, AxiosResponse } from 'axios';
import { apiRoutes } from '..';
import { store } from '../../app/store';
import { logout } from '../../app/features/authSlice';
import { toast } from 'react-toastify';
import i18n from '../../i18n/i18n';
import { clearAuthDataFromStorage } from '../../utils';

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
    if (error.response?.status === HTTP_STATUS.UNAUTHORIZED && failedRequest) {
        // Check if it's a signIn or signOut request, if yes no need to renew token
        if (
            failedRequest.url?.includes(apiRoutes.signIn) ||
            failedRequest.url?.includes(apiRoutes.signOut)
        ) {
            return Promise.reject(error);
        }

        toast.error(i18n.t('auth:sessionExpiredToastMessage'), {
            toastId: 'expired session',
        });
        store.dispatch(logout());
        clearAuthDataFromStorage();
    }
    return Promise.reject(error);
};
