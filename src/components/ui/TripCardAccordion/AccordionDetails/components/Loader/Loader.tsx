import { TripCardDetailsLoaderWrapper } from "./Loader.styled";

export const TripCardDetailsLoader = () => (
    <TripCardDetailsLoaderWrapper component={'div'}>
        <div className="dot-flashing" />
    </TripCardDetailsLoaderWrapper>
);