import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Container } from '@mui/material';
import { MainWrapper } from './Layout.styled';
import { AuthModal } from '../../components';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
    clearRedirectState,
    hideAuthModal,
} from '../../app/features/authSlice';

export const Layout = () => {
    const isAuthModalDisplayed = useAppSelector(
        (state) => state.auth.isAuthModalDisplayed
    );
    const dispatch = useAppDispatch();

    return (
        <>
            <Header />
            <MainWrapper>
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </MainWrapper>
            <Footer />
            <AuthModal
                isOpen={isAuthModalDisplayed}
                closeModal={() => {
                    dispatch(clearRedirectState());
                    dispatch(hideAuthModal());
                }}
            />
        </>
    );
};
