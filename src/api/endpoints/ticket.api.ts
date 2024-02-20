import { API, apiRoutes } from '..';
import { IPassengerSeat, ITicket } from '../../types';
import {
    getTicketFromBookingResponse,
    getTicketsFromBookingListingResponse,
} from '../converters/ticket.converter';
import {
    IBookingListingResponse,
    IBookingRequest,
    IBookingResponse,
} from '../types/ticket';

export const bookTicket = async (
    tripId: string,
    seats: IPassengerSeat[]
): Promise<ITicket> => {
    const body: IBookingRequest = {
        tripId: Number(tripId),
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

export const getAllBookings = async (): Promise<ITicket[]> => {
    const response: IBookingListingResponse = await API.get(apiRoutes.booking);
    const tickets = getTicketsFromBookingListingResponse(response);
    return tickets;
};
