import { API, apiRoutes } from '..';
import { IPassengerSeat, ITicket } from '../../types';
import {
    getTicketFromBookingResponse,
    getTicketsFromMyBookingsResponse,
    getTicketFromPnrResponse,
    getTicketsFromBookingListingResponse,
} from '../converters/ticket.converter';
import {
    IBookingListingResponse,
    IBookingRequest,
    IBookingResponse,
    IMyBookingsResponse,
    IPnrResponse,
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
    const response: IBookingListingResponse = await API.get(apiRoutes.booking, {
        params: {
            page: 1,
            pageSize: 1000,
        },
    });
    const tickets = getTicketsFromBookingListingResponse(response);
    return tickets;
};

export const getMyBookings = async (): Promise<ITicket[]> => {
    const response: IMyBookingsResponse = await API.get(apiRoutes.userBooking);
    const tickets = getTicketsFromMyBookingsResponse(response);
    return tickets;
};

export const getTicketByPnr = async (pnr: string): Promise<ITicket> => {
    const response: IPnrResponse = await API.get(
        `${apiRoutes.bookingPnr}/${pnr}`
    );
    const ticket = getTicketFromPnrResponse(response);
    return ticket;
};
