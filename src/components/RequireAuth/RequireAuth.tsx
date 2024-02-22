import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { paths } from '../../config';
import { setRedirectState, showAuthModal } from '../../app/features/authSlice';
import { useTranslation } from 'react-i18next';
import { EUserRole } from '../../types';

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
        return <Navigate to="404" replace />;
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
