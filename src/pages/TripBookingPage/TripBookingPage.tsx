import { useState } from 'react';
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogTitle,
    Grid,
    Typography,
} from '@mui/material';
import PassengerDetails from './components/PassengerDetails';
import TicketTotalFare from './components/TicketTotalFare';

export const TripBookingPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Box component="form">
                <Typography component="h3" variant="h5" mb={2} mt={4}>
                    Passenger Details
                </Typography>
                <PassengerDetails passengerNumber={1} seatNumber={12} />
                <PassengerDetails passengerNumber={2} seatNumber={13} />
                <Grid container>
                    <Grid item xs={12} sm={9}>
                        <TicketTotalFare
                            ticketFare={1200}
                            noOfSeatsBooked={4}
                        />
                    </Grid>
                    <Grid item xs={12} sm={3} ml="auto">
                        <Button
                            variant="contained"
                            onClick={handleClickOpen}
                            fullWidth
                        >
                            Checkout
                        </Button>
                    </Grid>
                </Grid>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {'Proceed with the booking?'}
                </DialogTitle>
                <DialogActions>
                    <Button variant="outlined" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={handleClose} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};
