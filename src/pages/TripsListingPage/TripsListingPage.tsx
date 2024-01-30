import { useTranslation } from "react-i18next";
import { TripsListingPageWrapper } from "./TripsListingPage.styled";
import { TripCard } from "./components";

export const TripsListingPage = () => {
  const { t } = useTranslation();

  return (
    <TripsListingPageWrapper>
      <h1>{t("tripListingHeading")}</h1>
      <TripCard />
      <TripCard />
    </TripsListingPageWrapper>
  );
};
