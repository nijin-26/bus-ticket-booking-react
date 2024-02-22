import { Button } from '@mui/material';
import { ErrorPageWrapper } from './ErrorPage.styled';
import { Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
    const navigate = useNavigate();

    const goHomeHandler = () => {
        navigate('/');
    };
    return (
        <ErrorPageWrapper>
            <h1>Oops. The page you are looking for does not exist.</h1>

            <Button
                variant="contained"
                onClick={goHomeHandler}
                sx={{ mt: 2 }}
                startIcon={<Home />}
            >
                Go home
            </Button>
        </ErrorPageWrapper>
    );
};
