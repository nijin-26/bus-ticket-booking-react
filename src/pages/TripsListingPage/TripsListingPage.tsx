import { TripCardAccordion } from '../../components';
import ActionBarTab from '../../components/actionBar/actionBarTab/ActionBarTab';
import { TripsListingPageWrapper } from './TripsListingPage.styled';

export const TripsListingPage = () => {
    return (
        <TripsListingPageWrapper>
            <ActionBarTab showFilterSort />
            <TripCardAccordion busType="AC" seatType="SLEEPER" />
            <TripCardAccordion busType="NON_AC" seatType="SEATER" />
        </TripsListingPageWrapper>
    );
};
