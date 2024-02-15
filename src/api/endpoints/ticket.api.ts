import { API, apiRoutes } from '..';
import { IPassengerSeat, ITicket } from '../../types';
import { getTicketFromBookingResponse } from '../converters/ticket.converter';
import { IBookingRequest, IBookingResponse } from '../types/ticket';

export const bookTicket = async (
    tripId: string,
    seats: IPassengerSeat[]
): Promise<ITicket> => {
    const body: IBookingRequest = {
        tripId: tripId,
        bookings: seats.map((seat) => ({
            seatNumber: seat.seatNumber.toString(),
            passengerName: seat.passenger.fullName,
            passengerAge: seat.passenger.age.toString(),
            passengerGender: seat.passenger.gender,
        })),
    };
    const response: IBookingResponse = await API.post(apiRoutes.booking, body);
    const ticket = getTicketFromBookingResponse(response);
    return ticket;
};
