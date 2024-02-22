import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { paths } from '../../config';
import { setRedirectState, showAuthModal } from '../../app/features/authSlice';
import { useTranslation } from 'react-i18next';

export const RequireAuth = () => {
    const { t } = useTranslation('auth');
    const location = useLocation();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);

    if (!user) {
        dispatch(
            setRedirectState({
                from: location.pathname,
                message: t('unauthorizedErrorMessage'),
            })
        );
        dispatch(showAuthModal());
    }

    return user ? <Outlet /> : <Navigate to={paths.home} replace />;
};
