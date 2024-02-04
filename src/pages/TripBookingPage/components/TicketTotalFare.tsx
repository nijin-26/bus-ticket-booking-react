import { Stack, Typography } from '@mui/material';

interface ITicketTotalFare {
    ticketFare: number;
    noOfSeatsBooked: number;
}

const TicketTotalFare = ({ ticketFare, noOfSeatsBooked }: ITicketTotalFare) => {
    return (
        <Stack direction="row" spacing={1}>
            <Typography component="span">
                Total Amount ({ticketFare} &#215; {noOfSeatsBooked}) :{' '}
            </Typography>
            <Typography component="span" sx={{ fontWeight: '600' }}>
                {ticketFare * noOfSeatsBooked}
            </Typography>
        </Stack>
    );
};

export default TicketTotalFare;
