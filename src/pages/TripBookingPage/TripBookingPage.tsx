import { Stack, Typography } from '@mui/material';
import PassengerDetailsForm from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/LongArrow';
import { TripCardAccordion } from '../../components';
import { IBusType, ISeatType, ITrip } from '../../api/types/trip';

const dummyTripData: ITrip = {
    id: '1',
    origin: 'Trivandrum',
    destination: 'Bangalore',
    departureTimestamp: '2024-02-01T08:00:00Z',
    arrivalTimestamp: '2024-02-01T12:00:00Z',
    seatType: ISeatType.SLEEPER,
    busType: IBusType.AC,
    farePerSeat: 50,
    availableSeats: 20,
    totalSeats: 30,
};

export const TripBookingPage = () => {
    return (
        <>
            <Stack direction="row" alignItems="center" mt={4} mb={3} gap="2rem">
                <Typography component="h1" variant="h4">
                    {dummyTripData.origin}
                </Typography>
                <LongArrow width="8rem" height="100%" />
                <Typography component="h1" variant="h4">
                    {dummyTripData.destination}
                </Typography>
            </Stack>
            <TripCardAccordion defaultExpanded={true} data={dummyTripData} />
            <PassengerDetailsForm />
        </>
    );
};
