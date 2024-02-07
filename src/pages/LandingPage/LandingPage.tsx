import { useTheme } from '@mui/material';
import ActionBarTab from '../../components/actionBar/actionBarTab/ActionBarTab';
import { LandingPageHeading, LandingPageWrapper } from './LandingPage.styled';
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

            <LandingPageHeading>Bus with us.</LandingPageHeading>
            <ActionBarTab />
        </LandingPageWrapper>
    );
};
