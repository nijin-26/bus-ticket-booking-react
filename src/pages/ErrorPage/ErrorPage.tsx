import { Button, Stack, useMediaQuery } from '@mui/material';
import {
    ErrorHeading,
    ErrorIllustration,
    ErrorPageWrapper,
} from './ErrorPage.styled';
import { ArrowBack, Home } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import lost from '../../assets/Lost.svg';
import { useTranslation } from 'react-i18next';
import { paths } from '../../config';

export const ErrorPage = () => {
    const navigate = useNavigate();
    const { t } = useTranslation('errorPage');
    const matches = useMediaQuery('(min-width:600px)');

    const goHomeHandler = () => {
        navigate(paths.home);
    };

    const goBackHandler = () => {
        navigate(-1);
    };

    return (
        <ErrorPageWrapper>
            <ErrorHeading>{t('errorPageHeading')}</ErrorHeading>
            <ErrorIllustration src={lost} width={matches ? '400px' : '200px'} />

            <Stack direction="row" gap={2} sx={{ marginTop: '3rem' }}>
                <Button
                    variant="contained"
                    onClick={goBackHandler}
                    startIcon={<ArrowBack />}
                >
                    {t('goBack')}
                </Button>

                <Button
                    variant="contained"
                    onClick={goHomeHandler}
                    startIcon={<Home />}
                >
                    {t('goHome')}
                </Button>
            </Stack>
        </ErrorPageWrapper>
    );
};
