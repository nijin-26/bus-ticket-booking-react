import { AxiosError, AxiosRequestConfig } from 'axios';
import storage from '../utils/storageUtils';

export const onRequest = (config: AxiosRequestConfig) => {
    const token = storage.getToken('accessToken');
    const headers = token ? { Authorization: `Bearer ${token}` } : {};
    config.headers = {
        'Content-type': 'application/json',
        ...config.headers,
        ...headers,
    };
    return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error);
