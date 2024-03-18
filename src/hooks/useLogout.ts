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
import { Dispatch, SetStateAction } from 'react';

//This custom hook returns an logout handler
export const useLogout = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { t } = useTranslation('logoutConfirmationModal');

    const refreshIntervalId = useAppSelector(
        (state) => state.auth.refreshIntervalId
    );

    const handleLogoutSuccess = () => {
        if (refreshIntervalId) {
            clearInterval(refreshIntervalId);
        }
        // flush_sync added to force state update of navigate
        // otherwise state update is batched
        // causing RequireAuth to re-render before navigate
        // which opens the login modal due to null user state in store
        navigate(paths.home, { unstable_flushSync: true });
        dispatch(logout());
        clearAuthDataFromStorage();
        toast.success(t('logoutSuccessMessage'), {
            toastId: 'logout success',
        });
    };

    const logoutHandler = async (
        setLogoutLoading: Dispatch<SetStateAction<boolean>>
    ) => {
        try {
            setLogoutLoading(true);
            await signOut();
            handleLogoutSuccess();
        } catch (error) {
            //expired, invalid or missing accessToken
            if (
                axios.isAxiosError<IAuthResponseError>(error) &&
                error.response?.status === 401
            ) {
                handleLogoutSuccess();
                return;
            }
            toast.error(t('logoutErrorMessage'), { toastId: 'logout error' });
        } finally {
            setLogoutLoading(false);
        }
    };

    return logoutHandler;
};
