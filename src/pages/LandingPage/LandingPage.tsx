import { Ticket } from "../Ticket/Ticket";
import { LandingPageWrapper } from "./LandingPage.styled";

export const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <h1>LandingPage</h1>
      <Ticket />
    </LandingPageWrapper>
  );
};
