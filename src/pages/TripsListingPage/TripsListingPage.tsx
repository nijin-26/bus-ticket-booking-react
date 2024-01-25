import { TripsListingPageWrapper } from "./TripsListingPage.styled";
import { TripCard } from "./components";

export const TripsListingPage = () => {
  return (
    <TripsListingPageWrapper>
      <h1>TripsListingPage</h1>
      <TripCard />
      <TripCard />
    </TripsListingPageWrapper>
  );
};
