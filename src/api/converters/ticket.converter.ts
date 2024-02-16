import { IGender, ITicket } from '../../types';
import { IBookingResponse } from '../types/ticket';

export const getTicketFromBookingResponse = (
    response: IBookingResponse
): ITicket => {
    const ticket: ITicket = {
        pnrNumber: response[0].pnrNumber,
        trip: response[0].trip,
        seats: response.map((booking) => ({
            seatNumber: parseInt(booking.seatNumber),
            passenger: {
                fullName: booking.passengerName,
                age: parseInt(booking.passengerAge),
                gender: booking.passengerGender as IGender,
            },
        })),
    };
    return ticket;
};
