import { MenuItem } from '@mui/base';
import { Paper, Typography, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';

const PassengerDetails = () => {
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

    return (
        <Box component={Paper} py="10px" px="20px" elevation={6}>
            <Typography component="h4" variant="h6" mb={2}>
                Passenger 1 | seat 12
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        required
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                        size="small"
                        error
                        helperText="Full name is a required field"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        required
                        id="age"
                        label="Age"
                        name="age"
                        size="small"
                        helperText=" "
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        select
                        id="gender"
                        label="Gender"
                        size="small"
                        helperText=" "
                        value=""
                    >
                        {genders.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        </Box>
    );
};

export default PassengerDetails;
