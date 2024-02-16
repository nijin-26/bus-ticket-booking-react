import { Stack, Typography } from '@mui/material';
import PassengerDetailsForm from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/LongArrow';
import { TripCardAccordion } from '../../components';
import { ITrip, ISeatType, IBusType } from '../../types';
import { useAppSelector } from '../../app/hooks';
import { fromSerializable } from '../../app/features/utils/tripDetailsHelperFns';


// TODO: fetch data from store 
const dummyTripData: ITrip = {
    id: '1',
    origin: {
        name: 'Chennai',
        id: '1',
        shortCode: 'MAA',
    },
    destination: {
        name: 'Bangalore',
        id: '2',
        shortCode: 'BLR',
    },
    departureTimestamp: new Date('2024-02-01T06:00:00Z'),
    arrivalTimestamp: new Date('2024-02-01T12:00:00Z'),
    seatType: ISeatType.SLEEPER,
    busType: IBusType.AC,
    farePerSeat: 50,
    availableSeats: 20,
    totalSeats: 30,
};

export const TripBookingPage = () => {
    const state = useAppSelector((state) => fromSerializable(state.tripDetails));
    return (
        <>
            <Stack direction="row" alignItems="center" mt={4} mb={3} gap="2rem">
                <Typography component="h1" variant="h4">
                    {dummyTripData.origin.name}
                </Typography>
                <LongArrow width="8rem" height="100%" />
                <Typography component="h1" variant="h4">
                    {dummyTripData.destination.name}
                </Typography>
            </Stack>
            <TripCardAccordion defaultExpanded={true} data={state} mode='view'/>
            <PassengerDetailsForm />
        </>
    );
};
