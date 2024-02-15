import { AxiosError, AxiosResponse } from 'axios';

interface ResponseData {
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

export const onResponse = (response: AxiosResponse) => {
    if (
        response.status >= HTTP_STATUS.SUCCESS &&
        response.status <= HTTP_STATUS.INFORMATION
    ) {
        const responseData = response.data as ResponseData;
        return Promise.resolve(responseData.data);
    }
};

export const onResponseError = (error: AxiosError) => {
    return Promise.reject(error);
};
