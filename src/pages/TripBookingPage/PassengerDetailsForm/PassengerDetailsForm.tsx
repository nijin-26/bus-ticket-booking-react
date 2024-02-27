import { Formik, Form, FieldArray, FastField, FormikProps } from 'formik';
import { Box, Grid, MenuItem, Paper, Typography } from '@mui/material';
import getValidationSchema from './validation';
import { Select, TextField } from 'formik-mui';
import { useTranslation } from 'react-i18next';
import { FareDetails } from '../../../components/FareDetails/FareDetails';
import { StyledButton } from '../../../components/Button/Button.styled';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../../config';
import { IBusType, IGender, ISeatType, ITicket } from '../../../types';

interface IPassengerDetails {
    passengers: {
        seatNumber: number;
        fullName: string;
        age: string;
        gender: string;
    }[];
}

const PassengerDetailsForm = () => {
    const { t } = useTranslation('passengerDetails');
    const theme = useTheme();

    const [languageChangeKey, setLanguageChangeKey] = useState(0);
    const formikRef = useRef<FormikProps<IPassengerDetails>>(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Incrementing languageChangeKey to force re-render when language changes
        setLanguageChangeKey((prevKey) => prevKey + 1);
        void formikRef.current?.validateForm();
    }, [t]);

    const generateInitialValues = () => {
        const selectedSeatCount = 2;
        const seatNumber = [1, 2];

        return Array.from({ length: selectedSeatCount }, (_, index) => ({
            seatNumber: seatNumber[index],
            fullName: '',
            age: '',
            gender: '',
        }));
    };

    const handleCheckout = () => {
        const iticketObj: ITicket = {
            pnrNumber: '976xq5',
            trip: {
                id: '97',
                origin: {
                    id: '8',
                    name: 'Palakkad',
                    shortCode: 'PLK',
                },
                destination: {
                    id: '9',
                    name: 'Pathanamthitta',
                    shortCode: 'PTA',
                },
                departureTimestamp: new Date('1970-01-01T00:00:00.000Z'),
                arrivalTimestamp: new Date('1970-01-01T00:00:00.000Z'),
                farePerSeat: 1100,
                totalSeats: 46,
                busType: IBusType.AC,
                seatType: ISeatType.SEATER,
                availableSeats: 45,
            },
            seats: [
                {
                    seatNumber: 1,
                    passenger: {
                        fullName: 'Akshay Krishna',
                        age: 23,
                        gender: IGender.MALE,
                    },
                },
            ],
        };

        navigate(paths.ticket.replace(':pnrNumber', iticketObj.pnrNumber), {
            state: iticketObj,
        });
    };

    return (
        <Formik
            innerRef={formikRef}
            initialValues={{
                passengers: generateInitialValues(),
            }}
            validationSchema={getValidationSchema(t)}
            validateOnChange={false}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ values }) => (
                <Form autoComplete="off" noValidate>
                    <Typography component="h2" variant="h5" mb={2} mt={4}>
                        {t('passengerDetailsFormHeading')}
                    </Typography>
                    <FieldArray name="passengers">
                        {() =>
                            values.passengers.map((_, index) => (
                                <Box
                                    key={index}
                                    component={Paper}
                                    py="1rem"
                                    px="2rem"
                                    mb="3rem"
                                    bgcolor={theme.color.background}
                                    boxShadow={`0 0 1rem 0 ${theme.color.boxShadowPrimary}`}
                                >
                                    <Typography
                                        component="h3"
                                        variant="h6"
                                        mb={2}
                                    >
                                        {`${t('passenger')} ${index + 1} | ${t(
                                            'seat'
                                        )} ${
                                            values.passengers[index].seatNumber
                                        }`}
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <FastField
                                                fullWidth
                                                size="small"
                                                component={TextField}
                                                name={`passengers.${index}.fullName`}
                                                id={`passengers.${index}.fullName`}
                                                label={t('fullName')}
                                                required
                                                helperText=" "
                                                key={languageChangeKey}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <FastField
                                                fullWidth
                                                size="small"
                                                component={TextField}
                                                id={'age'}
                                                name={`passengers.${index}.age`}
                                                label={t('age')}
                                                required
                                                helperText=" "
                                                key={languageChangeKey}
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <FastField
                                                fullWidth
                                                component={Select}
                                                formControl={{
                                                    fullWidth: true,
                                                    size: 'small',
                                                    required: true,
                                                }}
                                                name={`passengers.${index}.gender`}
                                                id={`passengers.${index}.gender`}
                                                label={t('gender')}
                                                labelId={`passengers.${index}.gender-simple`}
                                                formHelperText={{
                                                    children: ' ',
                                                }}
                                                key={languageChangeKey}
                                            >
                                                {t('genderValues', {
                                                    returnObjects: true,
                                                }).map((option) => (
                                                    <MenuItem
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </FastField>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))
                        }
                    </FieldArray>

                    <Grid container alignItems="center" mb={6} spacing={1.5}>
                        <Grid item xs={12} sm={9}>
                            <FareDetails noOfSeats={3} farePerSeat={1200} />
                        </Grid>
                        <Grid item xs={12} sm={3} ml="auto">
                            <StyledButton
                                type="submit"
                                fullWidth
                                onClick={handleCheckout}
                            >
                                {t('checkout')}
                            </StyledButton>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default PassengerDetailsForm;
