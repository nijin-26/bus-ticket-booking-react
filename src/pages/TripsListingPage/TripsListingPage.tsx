import { TripCardAccordion } from '../../components';
import { TripsListingPageWrapper } from './TripsListingPage.styled';

export const TripsListingPage = () => {
    return (
        <TripsListingPageWrapper>
            <h1>TripsListingPage</h1>
            <TripCardAccordion busType="AC" seatType="SLEEPER" />
            <TripCardAccordion busType="NON_AC" seatType="SEATER"/>
        </TripsListingPageWrapper>
    );
};
