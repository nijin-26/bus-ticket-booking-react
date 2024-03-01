import { Grid, Stack, Typography, useMediaQuery } from '@mui/material';
import PassengerDetailsForm from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/LongArrow';
import { ConfirmDialog, TripCardAccordion } from '../../components';
import { useAppSelector } from '../../app/hooks';
import { StyledButton } from '../../components/Button/Button.styled';
import { FareDetails } from '../../components/FareDetails/FareDetails';
import { useEffect, useRef, useState } from 'react';
import { FormikProps } from 'formik';
import { IPassengersInputFromFormik, filterSelectedSeats } from '../../utils';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader';
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { fromSerializable } from '../../utils/tripDetailsUtils';
// TODO: fetch data from store

export const TripBookingPage = () => {
    const { t } = useTranslation('bookingPageConfirmation');
    const navigate = useNavigate();
    const isMinWidth = useMediaQuery('(min-width:600px)');

    const selectTripDetails = (state: RootState) => state.tripDetails;
    const selectSerializedTripDetails = createSelector(
        selectTripDetails,
        fromSerializable
    );
    const state = useAppSelector(selectSerializedTripDetails);

    const selectedSeats = filterSelectedSeats(state.seats);
    const selectedSeatsCount = selectedSeats.length;

    const [showDialog, setShowDialog] = useState(false);
    const [showLoader, setShowLoader] = useState(false);
    const setShowLoaderFunction = (bool: boolean) => {
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
    useEffect(() => {
        if (state.seats.length === 0) {
            navigate(-1);
            toast.error(t('absentStateError'));
        }
    }, [navigate, state, t]);

    return (
        state.seats.length && (
            <>
                <Stack
                    direction="row"
                    alignItems="center"
                    mt={4}
                    mb={3}
                    gap="2rem"
                >
                    <Typography
                        component="h1"
                        variant={isMinWidth ? 'h4' : 'h6'}
                    >
                        {state.origin.name}
                    </Typography>
                    <LongArrow width="8rem" height="100%" />
                    <Typography
                        component="h1"
                        variant={isMinWidth ? 'h4' : 'h6'}
                    >
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
                    loaderFunction={setShowLoaderFunction}
                    tripId={state.id}
                />

                <Grid container alignItems="center" mb={6} spacing={1.5}>
                    <Grid item xs={12} sm={9}>
                        <FareDetails
                            noOfSeats={selectedSeatsCount}
                            farePerSeat={state.farePerSeat}
                        />
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
                    title={t('confirmationTitle')}
                    open={showDialog}
                    handleClose={() => {
                        setShowDialog(false);
                    }}
                    agreeText={t('agreeText')}
                    disagreeText={t('DisagreeText')}
                    handleAgreeFunction={() => {
                        setShowLoader(true);
                        formikRef.current?.handleSubmit();
                    }}
                >
                    {t('dialogContent')}
                </ConfirmDialog>
                <FullScreenLoader open={showLoader} />
            </>
        )
    );
};
