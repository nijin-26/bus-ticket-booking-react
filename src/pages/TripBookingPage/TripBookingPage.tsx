import { Grid, Stack, Typography } from '@mui/material';
import PassengerDetailsForm, {
    IPassengerDetails,
} from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/LongArrow';
import { TripCardAccordion } from '../../components';
import { IBusType, ISeatType, ITrip } from '../../api/types/trip';
import { t } from 'i18next';
import { StyledButton } from '../../components/Button/Button.styled';
import { FareDetails } from '../../components/FareDetails/FareDetails';
import { useRef, useState } from 'react';
import { FormikProps } from 'formik';
import ConfirmDialog from '../../components/ui/ConfirmDialog/ConfirmDialog';

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
    const [showDialog, setShowDialog] = useState(false);
    const formikRef = useRef<FormikProps<IPassengerDetails>>(null);
    const handleFormSubmit = () => {
        if (formikRef.current?.isValid) {
            setShowDialog(true);
            console.log('valid');
        } else {
            formikRef.current
                ?.validateForm()
                .then(() => {
                    console.log('validated');
                })
                .catch((error) => {
                    console.log(error);
                });
            console.log('not validated');
        }
    };

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
            <PassengerDetailsForm formikRef={formikRef} selectedSeats={[1]} />

            <Grid container alignItems="center" mb={6} spacing={1.5}>
                <Grid item xs={12} sm={9}>
                    <FareDetails noOfSeats={3} farePerSeat={1200} />
                </Grid>
                <Grid item xs={12} sm={3} ml="auto">
                    <StyledButton onClick={handleFormSubmit} fullWidth>
                        {t('checkout')}
                    </StyledButton>
                </Grid>
            </Grid>
            <ConfirmDialog
                title="Confirm Booking"
                open={showDialog}
                handleClose={() => {
                    setShowDialog(false);
                }}
                agreeText="Confirm"
                disagreeText="Decline"
                handleAgreeFunction={() => {
                    formikRef.current?.handleSubmit();
                }}
            >
                Are you sure you want to confirm
            </ConfirmDialog>
        </>
    );
};
