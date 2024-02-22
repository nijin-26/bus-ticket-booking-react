import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { paths } from '../../config';
import { setRedirectState, showAuthModal } from '../../app/features/authSlice';
import { useTranslation } from 'react-i18next';
import { EUserRole } from '../../types';
import { toast } from 'react-toastify';

interface IRequireAuthProps {
    allowedRoles: EUserRole[];
}

export const RequireAuth = ({ allowedRoles }: IRequireAuthProps) => {
    const { t } = useTranslation('auth');
    const location = useLocation();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);

    if (user && allowedRoles.includes(user.role)) {
        return <Outlet />;
    } else if (user) {
        setTimeout(() =>
            toast.error(
                "Access Denied: You don't have sufficient authorization to view this page.",
                { toastId: 'forbidden toast' }
            )
        );
        return <Navigate to={paths.home} replace />;
    } else {
        dispatch(
            setRedirectState({
                from: location.pathname,
                message: t('unauthorizedErrorMessage'),
            })
        );
        dispatch(showAuthModal());
        return <Navigate to={paths.home} replace />;
    }
};
