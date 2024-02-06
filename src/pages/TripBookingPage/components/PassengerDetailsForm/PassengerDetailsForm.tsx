import { Formik, Form, FieldArray, Field } from 'formik';
import TicketTotalFare from '../TicketTotalFare';
import { Box, Button, Grid, MenuItem, Paper, Typography } from '@mui/material';
import getValidationSchema from './validation';
import { Select, TextField } from 'formik-mui';

const PassengerDetailsForm = () => {
    const genders = [
        {
            value: 'male',
            label: 'Male',
        },
        {
            value: 'female',
            label: 'Female',
        },
        {
            value: 'other',
            label: 'Other',
        },
    ];

    const generateInitialValues = () => {
        const selectedSeatCount = 3;
        const seatNumber = [12, 22, 34];

        return Array.from({ length: selectedSeatCount }, (_, index) => ({
            seatNumber: seatNumber[index],
            fullName: '',
            age: '',
            gender: '',
        }));
    };

    return (
        <Formik
            initialValues={{
                passengers: generateInitialValues(),
            }}
            validationSchema={getValidationSchema}
            validateOnChange={false}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false);
                alert(JSON.stringify(values, null, 2));
            }}
        >
            {({ values }) => (
                <Form autoComplete="off" noValidate>
                    <Typography component="h3" variant="h5" mb={2} mt={4}>
                        Passenger Details
                    </Typography>
                    <FieldArray name="passengers">
                        {() =>
                            values.passengers.map((_, index) => (
                                <Box
                                    key={index}
                                    component={Paper}
                                    py="10px"
                                    px="20px"
                                    mb="30px"
                                    elevation={4}
                                >
                                    <Typography
                                        component="h4"
                                        variant="h6"
                                        mb={2}
                                    >
                                        {`Passenger ${index + 1} | seat ${
                                            values.passengers[index].seatNumber
                                        }`}
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            <Field
                                                fullWidth
                                                size="small"
                                                component={TextField}
                                                name={`passengers.${index}.fullName`}
                                                id={`passengers.${index}.fullName`}
                                                label="Full Name"
                                                helperText="hello"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <Field
                                                fullWidth
                                                size="small"
                                                component={TextField}
                                                id={'age'}
                                                name={`passengers.${index}.age`}
                                                label="Age"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <Field
                                                fullWidth
                                                component={Select}
                                                formControl={{
                                                    fullWidth: true,
                                                    size: 'small',
                                                }}
                                                name={`passengers.${index}.gender`}
                                                id={`passengers.${index}.gender`}
                                                label="Gender"
                                                labelId={`passengers.${index}.gender-simple`}
                                            >
                                                {genders.map((option) => (
                                                    <MenuItem
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Field>
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))
                        }
                    </FieldArray>

                    <Grid container>
                        <Grid item xs={12} sm={9}>
                            <TicketTotalFare
                                ticketFare={1200}
                                noOfSeatsBooked={4}
                            />
                        </Grid>
                        <Grid item xs={12} sm={3} ml="auto">
                            <Button variant="contained" type="submit" fullWidth>
                                Checkout
                            </Button>
                        </Grid>
                    </Grid>
                </Form>
            )}
        </Formik>
    );
};

export default PassengerDetailsForm;
