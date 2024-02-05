import { Formik, Form, FieldArray, Field } from 'formik';
// import PassengerDetails from './components/PassengerDetails';
import TicketTotalFare from './components/TicketTotalFare';
import FormControl from '@mui/material/FormControl';
import { Box, Button, Grid, MenuItem, Paper, Typography } from '@mui/material';
import getValidationSchema from './validation';
import { Select, TextField } from 'formik-mui';

export const TripBookingPage = () => {
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

    const generateInitialValues = (selectedSeatCount: number) =>
        Array.from({ length: selectedSeatCount }, () => ({
            fullName: '',
            age: '',
            gender: '',
        }));

    return (
        <Formik
            initialValues={{ passengers: generateInitialValues(1) }}
            validationSchema={getValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    setSubmitting(false);
                    alert(JSON.stringify(values, null, 2));
                }, 500);
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
                                        {`Passenger 1 | seat 12`}
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={6}>
                                            {/* <TextField
                                                fullWidth
                                                required
                                                id={'fullname'}
                                                name={`passengers.${index}.fullName`}
                                                label="Full Name"
                                                size="small"
                                            /> */}
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                name={`passengers.${index}.fullName`}
                                                label="Full Name"
                                                size="small"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <Field
                                                fullWidth
                                                component={TextField}
                                                id={'age'}
                                                name={`passengers.${index}.age`}
                                                label="Age"
                                                size="small"
                                                helperText=" "
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6} md={3}>
                                            <Field
                                                fullWidth
                                                component={Select}
                                                name={`passengers.${index}.gender`}
                                                label="Gender"
                                                labelId="gender-simple"
                                                size="small"
                                                helperText=" "
                                                value=""
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
                                            {/* <Field
                                                fullWidth
                                                component={Select}
                                                formControl={{
                                                    sx: FormControl,
                                                }}
                                                id={'gender'}
                                                name={`passengers.${index}.gender`}
                                                label="Gender"
                                                labelId="gender-select"
                                                size="small"
                                                helperText=" "
                                                value=""
                                            >
                                                {genders.map((option) => (
                                                    <MenuItem
                                                        key={option.value}
                                                        value={option.value}
                                                    >
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                            </Field> */}
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
