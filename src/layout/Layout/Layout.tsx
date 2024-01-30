import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Container } from '@mui/material';

export const Layout = () => {
    return (
        <>
            <Header />
            <main style={{ flexGrow: '1' }}>
                <Container maxWidth="sm">
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
};
