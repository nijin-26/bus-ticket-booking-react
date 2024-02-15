import { Grid, Stack, Typography } from '@mui/material';
import PassengerDetailsForm, {
    IPassengerDetails,
} from './PassengerDetailsForm/PassengerDetailsForm';
import LongArrow from '../../components/icons/LongArrow';
import { TripCardAccordion } from '../../components';
import { ITrip, ISeatType, IBusType } from '../../types';
import { t } from 'i18next';
import { StyledButton } from '../../components/Button/Button.styled';
import { FareDetails } from '../../components/FareDetails/FareDetails';
import { useRef, useState } from 'react';
import { FormikProps } from 'formik';
import ConfirmDialog from '../../components/ui/ConfirmDialog/ConfirmDialog';
// import FullScreenLoader from './FullScreenLoader';

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
    // const testObj: IPassengersInput = {
    //     passengers: [
    //         {
    //             seatNumber: 1,
    //             fullName: 'vsav',
    //             age: '12',
    //             gender: 'female',
    //         },
    //         {
    //             seatNumber: 2,
    //             fullName: 'fsvsv',
    //             age: '12',
    //             gender: 'female',
    //         },
    //         {
    //             seatNumber: 3,
    //             fullName: 'vsdvsdv',
    //             age: '43',
    //             gender: 'male',
    //         },
    //     ],
    // };

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
            <TripCardAccordion defaultExpanded={true} data={dummyTripData} />
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
