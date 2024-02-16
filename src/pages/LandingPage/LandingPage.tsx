import { useTheme } from '@mui/material';
import ActionBarTab from '../../components/actionBar/actionBarTab/ActionBarTab';
import { LandingPageHeading, LandingPageWrapper } from './LandingPage.styled';
import LandingPageIllustrationDark from './LandingPageIllustrationDark copy';
import LandingPageIllustrationLight from './LandingPageIllustrationLight';
import { useTranslation } from 'react-i18next';

export const LandingPage = () => {
    const theme = useTheme();
    const { t } = useTranslation('landingPage');
    const currentTheme = theme.palette.mode;

    return (
        <LandingPageWrapper>
            {currentTheme === 'dark' ? (
                <LandingPageIllustrationDark />
            ) : (
                <LandingPageIllustrationLight />
            )}

            <LandingPageHeading>{t('busWithUs')}</LandingPageHeading>
            <ActionBarTab />
        </LandingPageWrapper>
    );
};
