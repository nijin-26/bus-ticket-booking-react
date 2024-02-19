import { Formik, Form, FieldArray, FastField, FormikProps } from 'formik';
import { Box, Grid, MenuItem, Paper, Typography } from '@mui/material';
import getValidationSchema from './validation';
import { Select, TextField } from 'formik-mui';
import { useTranslation } from 'react-i18next';
import { useState, useEffect, RefObject } from 'react';
import { useTheme } from '@emotion/react';
import { IPassengersInputFromFormik, conv } from '../../../utils';
import { bookTicket } from '../../../api/endpoints/ticket.api';

interface IPassengerDetailsFormProps {
    selectedSeats: number[];
    formikRef: RefObject<FormikProps<IPassengersInputFromFormik>>;
    loaderFun: (bool: boolean) => void;
    tripId: string;
}

const PassengerDetailsForm = ({
    selectedSeats,
    formikRef,
    loaderFun,
    tripId,
}: IPassengerDetailsFormProps) => {
    const { t } = useTranslation('passengerDetails');
    const theme = useTheme();

    const [languageChangeKey, setLanguageChangeKey] = useState(0);

    const postBookingData = async (obj: IPassengersInputFromFormik) => {
        const inputObj = conv(obj);
        console.log(inputObj, 'this is the input obj for api');
        try {
            const responseBook = await bookTicket(tripId, inputObj);
            console.log(
                responseBook,
                'response after booking hahahahahahahahahahahahha'
            );
        } catch (err) {
            console.log('error from api hahahahahahahahahahahahahahahahaha');
        } finally {
            loaderFun(false);
        }
    };

    useEffect(() => {
        // Incrementing languageChangeKey to force re-render when language changes
        setLanguageChangeKey((prevKey) => prevKey + 1);
        void formikRef.current?.validateForm();
    }, [t, formikRef]);

    const generateInitialValues = () => {
        const selectedSeatCount = selectedSeats.length;
        const seatNumber = selectedSeats;

        return Array.from({ length: selectedSeatCount }, (_, index) => ({
            seatNumber: seatNumber[index],
            fullName: '',
            age: '',
            gender: '',
        }));
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
                void postBookingData(values);
                setSubmitting(false);
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
                </Form>
            )}
        </Formik>
    );
};

export default PassengerDetailsForm;
