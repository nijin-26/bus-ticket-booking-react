import {
    Box,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Stack,
    TextField,
    Typography,
} from '@mui/material';
import { useState } from 'react';

export const TripBookingPage = () => {
    const [gender, setGender] = useState('');

    const handleGenderChange = (event: SelectChangeEvent) => {
        setGender(event.target.value);
    };

    return (
        <Box component="form">
            <Typography component="h3" sx={{ typography: 'h5' }} gutterBottom>
                Passenger Details
            </Typography>
            <Box component="fieldset" p="20px">
                <Typography
                    component="h4"
                    sx={{ typography: 'h6' }}
                    gutterBottom
                >
                    Passenger 1 | seat 12
                </Typography>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                >
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fullName"
                        label="Full Name"
                        name="fullName"
                    />
                    <TextField
                        margin="normal"
                        required
                        id="age"
                        label="Age"
                        name="age"
                    />
                    <FormControl sx={{ minWidth: 150 }}>
                        <InputLabel id="gender-label">Gender</InputLabel>
                        <Select
                            labelId="gender-label"
                            id="gender"
                            label="Gender"
                            value={gender}
                            onChange={handleGenderChange}
                        >
                            <MenuItem value={'male'}>Male</MenuItem>
                            <MenuItem value={'female'}>Female</MenuItem>
                            <MenuItem value={'other'}>Other</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Box>
        </Box>
    );
};
