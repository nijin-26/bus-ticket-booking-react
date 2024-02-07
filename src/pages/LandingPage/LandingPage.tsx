import { useTheme } from '@mui/material';
import ActionBarTab from '../../components/actionBar/actionBarTab/ActionBarTab';
import { LandingPageWrapper } from './LandingPage.styled';
import LandingPageIllustration from './LandingPageIllustrationLight';
import LandingPageIllustrationDark from './LandingPageIllustrationDark copy';
import LandingPageIllustrationLight from './LandingPageIllustrationLight';

export const LandingPage = () => {
    const theme = useTheme();
    const currentTheme = theme.palette.mode;
    console.log(currentTheme);

    return (
        <LandingPageWrapper>
            {currentTheme === 'dark' ? (
                <LandingPageIllustrationDark />
            ) : (
                <LandingPageIllustrationLight />
            )}

            <h1>Bus with us.</h1>
            <ActionBarTab />
        </LandingPageWrapper>
    );
};
