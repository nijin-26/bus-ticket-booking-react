import { Grid, Stack, Typography } from '@mui/material';
import PassengerDetailsForm from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/LongArrow';
import { TripCardAccordion } from '../../components';
import { useAppSelector } from '../../app/hooks';
import { fromSerializable } from '../../app/features/utils/tripDetailsHelperFns';

import { t } from 'i18next';
import { StyledButton } from '../../components/Button/Button.styled';
import { FareDetails } from '../../components/FareDetails/FareDetails';
import { useRef, useState } from 'react';
import { FormikProps } from 'formik';
import ConfirmDialog from '../../components/ui/ConfirmDialog/ConfirmDialog';
import { IPassengersInputFromFormik, filterSelectedSeats } from '../../utils';

import FullScreenLoader from './FullScreenLoader';

export const TripBookingPage = () => {
    const state = useAppSelector((state) =>
        fromSerializable(state.tripDetails)
    );
    console.log(state, 'this is the state');
    const selectedSeats = filterSelectedSeats(state.seats);

    const [showDialog, setShowDialog] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const setShowLoaderFun = (bool: boolean) => {
        setShowLoader(bool);
    };
    const formikRef = useRef<FormikProps<IPassengersInputFromFormik>>(null);

    const handleFormSubmit = () => {
        if (formikRef.current?.isValid) {
            setShowDialog(true);
        } else {
            formikRef.current?.handleSubmit(); // to retrigger validation of the form
        }
    };

    return (
        <>
            <Stack direction="row" alignItems="center" mt={4} mb={3} gap="2rem">
                <Typography component="h1" variant="h4">
                    {state.origin.name}
                </Typography>
                <LongArrow width="8rem" height="100%" />
                <Typography component="h1" variant="h4">
                    {state.destination.name}
                </Typography>
            </Stack>
            <TripCardAccordion
                defaultExpanded={true}
                data={state}
                mode="view"
            />
            <PassengerDetailsForm
                formikRef={formikRef}
                selectedSeats={selectedSeats}
                loaderFun={setShowLoaderFun}
                tripId={state.id}
            />

            <Grid container alignItems="center" mb={6} spacing={1.5}>
                <Grid item xs={12} sm={9}>
                    <FareDetails noOfSeats={3} farePerSeat={1200} />
                </Grid>
                <Grid item xs={12} sm={3} ml="auto">
                    <StyledButton
                        onClick={() => {
                            handleFormSubmit();
                        }}
                        fullWidth
                    >
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
                    setShowLoader(true);
                    formikRef.current?.handleSubmit();
                }}
            >
                Are you sure you want to confirm
            </ConfirmDialog>
            <FullScreenLoader open={showLoader} />
        </>
    );
};
