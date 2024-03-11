import { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getToken } from '../../utils';

export const onRequest = (config: InternalAxiosRequestConfig) => {
    const accessToken = getToken('accessToken');
    if (accessToken) {
        config.headers.set('Authorization', `Bearer ${accessToken}`);
    }
    return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error);
