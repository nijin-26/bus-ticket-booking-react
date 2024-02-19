import { Grid, Stack, Typography } from '@mui/material';
import PassengerDetailsForm, {
    IPassengerDetails,
} from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/LongArrow';
import { TripCardAccordion } from '../../components';
import { ITrip, ISeatType, IBusType } from '../../types';
import { useAppSelector } from '../../app/hooks';
import { fromSerializable } from '../../app/features/utils/tripDetailsHelperFns';

import { t } from 'i18next';
import { StyledButton } from '../../components/Button/Button.styled';
import { FareDetails } from '../../components/FareDetails/FareDetails';
import { useRef, useState } from 'react';
import { FormikProps } from 'formik';
import ConfirmDialog from '../../components/ui/ConfirmDialog/ConfirmDialog';
// import { conv } from '../../utils';
// import { bookTicket } from '../../api/endpoints/ticket.api';
// import FullScreenLoader from './FullScreenLoader';

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
    const state = useAppSelector((state) =>
        fromSerializable(state.tripDetails)
    );
    // const testObj = {
    //     passengers: [
    //         {
    //             seatNumber: 12,
    //             fullName: 'asasas',
    //             age: '12',
    //             gender: 'male',
    //         },
    //         {
    //             seatNumber: 22,
    //             fullName: 'sdadsd',
    //             age: '23',
    //             gender: 'male',
    //         },
    //     ],
    // };

    // const inputObj = conv(testObj);
    // console.log(inputObj, 'this is the input obj for api');
    // try {
    //     const responseBook = bookTicket('2', inputObj);
    //     console.log(responseBook, 'response after booking');
    // } catch (err) {
    //     console.log(err, 'error from api');
    // }

    // const testAns = converterFun(testObj, 1);
    // console.log(testAns);
    const [showDialog, setShowDialog] = useState(false);
    // const [showLoader, setShowLoader] = useState(false);
    const formikRef = useRef<FormikProps<IPassengerDetails>>(null);

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
                    {dummyTripData.origin.name}
                </Typography>
                <LongArrow width="8rem" height="100%" />
                <Typography component="h1" variant="h4">
                    {dummyTripData.destination.name}
                </Typography>
            </Stack>
            <TripCardAccordion
                defaultExpanded={true}
                data={state}
                mode="view"
            />
            <PassengerDetailsForm formikRef={formikRef} selectedSeats={[1]} />

            <Grid container alignItems="center" mb={6} spacing={1.5}>
                <Grid item xs={12} sm={9}>
                    <FareDetails noOfSeats={3} farePerSeat={1200} />
                </Grid>
                <Grid item xs={12} sm={3} ml="auto">
                    <StyledButton
                        onClick={() => {
                            handleFormSubmit();
                            // setShowLoader(true);
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
                    formikRef.current?.handleSubmit();
                }}
            >
                Are you sure you want to confirm
            </ConfirmDialog>
            {/* <FullScreenLoader open={showLoader}  /> */}
        </>
    );
};
