import { Button } from '@mui/material';
import {
    ButtonContainer,
    ErrorHeading,
    ErrorPageWrapper,
} from './ErrorPage.styled';
import { ArrowBack, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import lost from '../../assets/Lost.gif';
import { useTranslation } from 'react-i18next';

export const ErrorPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('errorPage');

    const goHomeHandler = () => {
        navigate('/');
    };

    const goBackHandler = () => {
        navigate(-1);
    };

    return (
        <ErrorPageWrapper>
            <ErrorHeading>{t('errorPageHeading')}</ErrorHeading>
            <img src={lost} />

            <ButtonContainer>
                <Button
                    variant="contained"
                    onClick={goBackHandler}
                    sx={{ mt: 2 }}
                    startIcon={<ArrowBack />}
                >
                    {t('goBack')}
                </Button>

                <Button
                    variant="contained"
                    onClick={goHomeHandler}
                    sx={{ mt: 2 }}
                    startIcon={<Home />}
                >
                    {t('goHome')}
                </Button>
            </ButtonContainer>
        </ErrorPageWrapper>
    );
};
