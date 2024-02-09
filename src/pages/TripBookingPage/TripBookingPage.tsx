import { Stack, Typography } from '@mui/material';
import PassengerDetailsForm from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/longArrow';
import { TripCardAccordion } from '../../components';

export const TripBookingPage = () => {
    return (
        <>
            <Stack direction="row" alignItems="center" mt={4} mb={3} gap="2rem">
                <Typography component="h1" variant="h4">
                    Thiruvananthapuram
                </Typography>
                <LongArrow width="8rem" height="100%" />
                <Typography component="h1" variant="h4">
                    Bangalore
                </Typography>
            </Stack>
            <TripCardAccordion
                busType="AC"
                seatType="SLEEPER"
                defaultExpanded={true}
            />
            <PassengerDetailsForm />
        </>
    );
};
