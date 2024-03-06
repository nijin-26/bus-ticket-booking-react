import { AxiosError, AxiosRequestConfig } from 'axios';
import { getToken, storage } from '../../utils';
import { renewToken } from '..';
import { logout } from '../../app/features/authSlice';
import { store } from '../../app/store';
import { toast } from 'react-toastify';

// export const onRequest = (config: AxiosRequestConfig) => {
//     const token = storage.getItem<string>('accessToken');
//     const headers = token ? { Authorization: `Bearer ${token}` } : {};
//     config.headers = {
//         'Content-type': 'application/json',
//         ...config.headers,
//         ...headers,
//     };
//     return config;
// };

export const onRequest = async (config: AxiosRequestConfig) => {
    let accessToken = getToken('accessToken');
    let refreshToken = getToken('refreshToken');

    if (!accessToken) {
        if (refreshToken) {
            try {
                const response = await renewToken(refreshToken);

                accessToken = response.accessToken;
                refreshToken = response.refreshToken;
                storage.setItem('accessToken', accessToken);
                storage.setItem('refreshToken', refreshToken);
            } catch (error) {
                storage.removeItem('userData');
                storage.removeItem('refreshToken');
                store.dispatch(logout());
                toast.error(
                    'Session Expired: You have been logged out for security reasons. Please log in again to continue.',
                    { toastId: 'session expired' }
                );
            }
        } else {
            storage.removeItem('userData');
            store.dispatch(logout());
        }
    }

    const headers = accessToken
        ? { Authorization: `Bearer ${accessToken}` }
        : {};
    config.headers = {
        'Content-type': 'application/json',
        ...config.headers,
        ...headers,
    };
    return config;
};

export const onRequestError = (error: AxiosError): Promise<AxiosError> =>
    Promise.reject(error);
