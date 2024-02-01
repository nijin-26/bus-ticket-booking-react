import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Container } from '@mui/material';
import { MainWrapper } from './Layout.styled';

export const Layout = () => {
    return (
        <>
            <Header />
            <MainWrapper>
                <Container maxWidth="lg">
                    <Outlet />
                </Container>
            </MainWrapper>
            <Footer />
        </>
    );
};
