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
import { useState } from 'react';
import TicketTotalFare from './components/ticketTotalFare';

export const TripBookingPage = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Box component="form">
            <Typography component="h3" variant="h5" mb={2}>
                Passenger Details
            </Typography>
            <PassengerDetails />
            <Grid container mt={3}>
                <Grid item xs={12} sm={9}>
                    <TicketTotalFare ticketFare={1200} noOfSeatsBooked={4} />
                </Grid>
                <Grid item xs={12} sm={3} ml="auto">
                    <Button
                        variant="outlined"
                        onClick={handleClickOpen}
                        fullWidth
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
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
                    <Button onClick={handleClose}>No</Button>
                    <Button onClick={handleClose} autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};
