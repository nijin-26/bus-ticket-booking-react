import TripCardAccordion from '../../components/ui/TripCard/TripCardAccordion';
import { TripsListingPageWrapper } from './TripsListingPage.styled';

export const TripsListingPage = () => {
    return (
        <TripsListingPageWrapper>
            <h1>TripsListingPage</h1>
            <TripCardAccordion />
        </TripsListingPageWrapper>
    );
};
