import { Outlet } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { LayoutWrapper } from './Layout.styled';

export const Layout = () => {
    return (
        <LayoutWrapper>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            <Footer />
        </LayoutWrapper>
    );
};
