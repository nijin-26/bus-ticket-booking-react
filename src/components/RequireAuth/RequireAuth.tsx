import { Navigate, Outlet } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { paths } from '../../config';
import { showAuthModal } from '../../app/features/authSlice';
import { toast } from 'react-toastify';

export const RequireAuth = () => {
    const user = useAppSelector((state) => state.auth.user);
    const dispatch = useAppDispatch();

    if (!user) {
        //setTimeout used to make sure that the toast is displayed
        //after the page navigation occurs
        setTimeout(() =>
            toast.error('Please login to valid account to view this page')
        );
        dispatch(showAuthModal());
    }

    return user ? <Outlet /> : <Navigate to={paths.home} replace />;
};
