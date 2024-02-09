import { Stack, Typography } from '@mui/material';
import PassengerDetailsForm from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/longArrow';
import { TripCardAccordion } from '../../components';

export const TripBookingPage = () => {
    return (
        <>
            <Stack direction="row" alignItems="center" mt={4} mb={3} gap="20px">
                <Typography component="h2" variant="h4">
                    Thiruvananthapuram
                </Typography>
                <LongArrow width="80px" height="100%" />
                <Typography component="h2" variant="h4">
                    Bangalore
                </Typography>
            </Stack>
            <TripCardAccordion
                busType="AC"
                seatType="SLEEPER"
                isExpanded={true}
            />
            <PassengerDetailsForm />
        </>
    );
};
