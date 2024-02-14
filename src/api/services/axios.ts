import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_ENDPOINT as string,
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

export default apiClient;
