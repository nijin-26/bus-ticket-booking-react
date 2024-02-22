import { API, apiRoutes } from '..';
import { IPassengerSeat, ITicket } from '../../types';
import {
    getTicketFromBookingResponse,
    getTicketsFromBookingListingResponse,
} from '../converters/ticket.converter';
import {
    IBookingListingRequest,
    IBookingListingResponse,
    IBookingRequest,
    IBookingResponse,
    IMyBookingListingResponse,
} from '../types/ticket';

export interface IGetBookingsReturn {
    bookings: ITicket[];
    resultCount: number;
}

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

export const getBookings = async (
    params: IBookingListingRequest
): Promise<IGetBookingsReturn> => {
    const response: IBookingListingResponse = await API.get(apiRoutes.booking, {
        params,
    });
    const tickets = getTicketsFromBookingListingResponse(response);
    return {
        bookings: tickets,
        // TODO: uncomment this line when backend is ready
        // resultCount: response.resultCount,
        resultCount: tickets.length,
    };
};

export const getMyBookings = async (
    params: IBookingListingRequest
): Promise<IGetBookingsReturn> => {
    const response: IMyBookingListingResponse = await API.get(apiRoutes.userBooking, {
        params,
    });
    const tickets = getTicketsFromBookingListingResponse(response);
    return {
        bookings: tickets,
        // TODO: uncomment this line when backend is ready
        // resultCount: response.resultCount,
        resultCount: tickets.length,
    };
};
