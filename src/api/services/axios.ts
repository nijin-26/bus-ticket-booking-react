import axios from 'axios';
import { onRequest, onRequestError } from './requestInterceptor';
import { onResponse, onResponseError } from './responseInterceptor';

const baseUrl = import.meta.env.VITE_API_ENDPOINT as string | undefined;

if (baseUrl === undefined) {
    throw new Error('VITE_API_ENDPOINT is not defined. Is .env file missing?');
}

const apiClient = axios.create({
    baseURL: baseUrl,
    timeout: 30000,
    headers: {
        'Content-type': 'application/json',
    },
});

apiClient.interceptors.request.use(onRequest, onRequestError);
apiClient.interceptors.response.use(onResponse, onResponseError);

export const refreshApi = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
});

refreshApi.interceptors.response.use(onResponse);

export default apiClient;
