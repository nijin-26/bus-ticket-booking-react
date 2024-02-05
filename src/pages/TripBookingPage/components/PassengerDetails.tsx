import {
    Paper,
    Typography,
    Grid,
    TextField,
    MenuItem,
    Box,
} from '@mui/material';

interface IPassengerDetails {
    passengerNumber: number;
    seatNumber: number;
}

const PassengerDetails = ({
    passengerNumber,
    seatNumber,
}: IPassengerDetails) => {
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
        <Box component={Paper} py="10px" px="20px" mb="30px" elevation={4}>
            <Typography component="h4" variant="h6" mb={2}>
                {`Passenger ${passengerNumber} | seat ${seatNumber}`}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <TextField
                        fullWidth
                        required
                        id={'fullname'}
                        name={'fullName'}
                        label="Full Name"
                        size="small"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        required
                        id={'age'}
                        name={'age'}
                        label="Age"
                        size="small"
                        helperText=" "
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        fullWidth
                        select
                        id={'gender'}
                        name={'gender'}
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

// const PassengerDetails = ({
//     passengerNumber,
//     seatNumber,
// }: IPassengerDetails) => {
//     const genders = [
//         {
//             value: 'male',
//             label: 'Male',
//         },
//         {
//             value: 'female',
//             label: 'Female',
//         },
//         {
//             value: 'other',
//             label: 'Other',
//         },
//     ];

//     return (
//         <Box component={Paper} py="10px" px="20px" mb="30px" elevation={4}>
//             <Typography component="h4" variant="h6" mb={2}>
//                 {`Passenger ${passengerNumber} | seat ${seatNumber}`}
//             </Typography>
//             <Grid container spacing={2}>
//                 <Grid item xs={12} md={6}>
//                     <TextField
//                         fullWidth
//                         required
//                         id={`${passengerNumber}-fullName`}
//                         name={`${passengerNumber}-fullName`}
//                         label="Full Name"
//                         size="small"
//                         // error
//                         // helperText="Full name is a required field"
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={3}>
//                     <TextField
//                         fullWidth
//                         required
//                         id={`${passengerNumber}-age`}
//                         name={`${passengerNumber}-age`}
//                         label="Age"
//                         size="small"
//                         helperText=" "
//                     />
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={3}>
//                     <TextField
//                         fullWidth
//                         select
//                         id={`${passengerNumber}-gender`}
//                         name={`${passengerNumber}-gender`}
//                         label="Gender"
//                         size="small"
//                         helperText=" "
//                         value=""
//                     >
//                         {genders.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// };

export default PassengerDetails;
