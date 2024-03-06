import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';

const baseUrl = import.meta.env.VITE_API_ENDPOINT as string | undefined;

if (baseUrl === undefined) {
    throw new Error('VITE_API_ENDPOINT is not defined. Is .env file missing?');
}

const apiClient = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
});

apiClient.interceptors.request.use(
    onRequest as unknown as <TConfig>(
        value: InternalAxiosRequestConfig<TConfig>
    ) =>
        | InternalAxiosRequestConfig<TConfig>
        | Promise<InternalAxiosRequestConfig<TConfig>>,
    onRequestError
);

apiClient.interceptors.response.use(
    onResponse as unknown as <TResponse, TConfig>(
        value: AxiosResponse<TResponse, TConfig>
    ) =>
        | AxiosResponse<TResponse, TConfig>
        | Promise<AxiosResponse<TResponse, TConfig>>,
    onResponseError
);

export const refreshApi = axios.create({
    baseURL: baseUrl,
    timeout: 2000,
});

refreshApi.interceptors.response.use(
    onResponse as unknown as <TResponse, TConfig>(
        value: AxiosResponse<TResponse, TConfig>
    ) =>
        | AxiosResponse<TResponse, TConfig>
        | Promise<AxiosResponse<TResponse, TConfig>>
);

export default apiClient;
