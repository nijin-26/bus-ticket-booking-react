import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toast } from 'react-toastify';
import { clearAuthDataFromStorage } from '../utils';
import axios from 'axios';
import { signOut } from '../api';
import { paths } from '../config';
import { IAuthResponseError } from '../types';
import { logout } from '../app/features/authSlice';
import { useTranslation } from 'react-i18next';

//This custom hook returns an logout handler
export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { t } = useTranslation('logoutConfirmationModal');

    const refreshIntervalId = useAppSelector(
        (state) => state.auth.refreshIntervalId
    );

    const logoutHandler = async () => {
        try {
            await signOut();
            if (refreshIntervalId) {
                clearInterval(refreshIntervalId);
            }
            navigate(paths.home);
            dispatch(logout());
            clearAuthDataFromStorage();
            toast.success(t('logoutSuccessMessage'), {
                toastId: 'logout success',
            });
        } catch (error) {
            //expired, invalid or missing accessToken
            if (
                axios.isAxiosError<IAuthResponseError>(error) &&
                error.response?.status === 401
            ) {
                console.error('logout error : ', error.response);
                navigate(paths.home);
                dispatch(logout());
                clearAuthDataFromStorage();
                toast.success(t('logoutSuccessMessage'), {
                    toastId: 'logout success',
                });
                return;
            }

            console.error(error);
            toast.error(t('logoutErrorMessage'), { toastId: 'logout error' });
        }
    };

    return logoutHandler;
};
