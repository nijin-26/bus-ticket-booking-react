import { Box } from '@mui/material';
import { IBooking } from '../../../types/bookingsList';
import TableWrapper from './PassengerDetailCard.styled';

const PassengerDetailCard = ({ booking }: { booking: IBooking }) => {
    let totalFare = 0;
    const columns = [
        {
            field: 'seatNumber',
            headerName: 'Seat',
        },
        {
            field: 'name',
            headerName: 'Name',
        },
        {
            field: 'fare',
            headerName: 'Fare',
        },
    ];
    return (
        <Box>
            <p>PNR number: {booking.pnrNumber}</p>
            <p>Trip ID: {booking.tripId}</p>
            <p>Trip duration: {booking.durationInHours}</p>
            <p>Passenger(s) list</p>
            <TableWrapper>
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th key={column.field}>{column.headerName}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {booking.passengers.map((passenger) => {
                        totalFare += Number(passenger.fare);
                        return (
                            <tr key={passenger.seatNumber}>
                                <td>{passenger.seatNumber}</td>
                                <td>
                                    <p>{passenger.passengerName}</p>
                                    <p>
                                        {passenger.passengerAge}|
                                        {passenger.passengerGender === 'male'
                                            ? 'M'
                                            : 'F'}
                                    </p>
                                </td>
                                <td>{passenger.fare}</td>
                            </tr>
                        );
                    })}
                    <tr>
                        <td colSpan={2}>Total fare</td>
                        <td>{totalFare}</td>
                    </tr>
                </tbody>
            </TableWrapper>
        </Box>
    );
};

export default PassengerDetailCard;
