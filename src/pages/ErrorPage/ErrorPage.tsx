import { ErrorPageWrapper } from './ErrorPage.styled';

export const ErrorPage = () => {
    document.title = 'Bustle - Oops!';

    return (
        <ErrorPageWrapper>
            <h1>404 Page Not Found</h1>
        </ErrorPageWrapper>
    );
};
