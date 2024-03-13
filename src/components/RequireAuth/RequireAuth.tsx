import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { paths } from '../../config';
import { setSignInState, showAuthModal } from '../../app/features/authSlice';
import { useTranslation } from 'react-i18next';
import { EUserRole, TAlertStatus } from '../../types';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

interface IRequireAuthProps {
    allowedRoles: EUserRole[];
}

export const RequireAuth = ({ allowedRoles }: IRequireAuthProps) => {
    const { t } = useTranslation('auth');
    const location = useLocation();
    const dispatch = useAppDispatch();

    const user = useAppSelector((state) => state.auth.user);

    useEffect(() => {
        if (!user) {
            dispatch(
                setSignInState({
                    from: location.pathname,
                    info: {
                        message: t('unauthorizedErrorMessage'),
                        status: TAlertStatus.warning,
                    },
                })
            );
            dispatch(showAuthModal());
        }
    }, [user, location, t, dispatch]);

    if (user && allowedRoles.includes(user.role)) {
        return <Outlet />;
    } else if (user) {
        //setTimeout added so that toast is still visible after navigating to landing page
        setTimeout(() =>
            toast.error(t('forbiddenErrorMessage'), {
                toastId: 'forbidden toast',
            })
        );
        return <Navigate to={paths.home} replace />;
    } else {
        // dispatch(
        //     setSignInState({
        //         from: location.pathname,
        //         info: {
        //             message: t('unauthorizedErrorMessage'),
        //             status: TAlertStatus.warning,
        //         },
        //     })
        // );
        // dispatch(showAuthModal());
        return <Navigate to={paths.home} replace />;
    }
};
