import ActionBarTab from '../../components/actionBar/actionBarTab/ActionBarTab';
import { LandingPageWrapper } from './LandingPage.styled';
import LandingPageIllustration from './LandingPageIllustration';

export const LandingPage = () => {
    return (
        <LandingPageWrapper>
            <LandingPageIllustration />
            <h1>Bus with us.</h1>
            <ActionBarTab />
        </LandingPageWrapper>
    );
};
