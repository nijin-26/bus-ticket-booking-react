import { TripsListingPageWrapper } from "./TripsListingPage.styled";
import { TripCard } from "./components";

export const TripsListingPage = () => {

  return (
    <TripsListingPageWrapper>
      <h1>Trip Listing Page</h1>
      <TripCard />
      <TripCard />
    </TripsListingPageWrapper>
  );
};
