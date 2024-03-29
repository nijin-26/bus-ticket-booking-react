import { API, apiRoutes } from '..';
import { IPassengerSeat, ITicket } from '../../types';
import {
    getTicketsFromMyBookingsResponse,
    getTicketFromPnrResponse,
    getTicketsFromBookingListingResponse,
    getPnrFromBookingResponse,
} from '../converters/ticket.converter';
import {
    IBookingListingResponse,
    IBookingRequest,
    IBookingResponse,
    ICancelBookingResponse,
    IMyBookingsResponse,
    IPnrResponse,
} from '../types/ticket';

export const bookTicket = async (
    tripId: string,
    seats: IPassengerSeat[]
): Promise<string> => {
    const body: IBookingRequest = {
        tripId: Number(tripId),
        bookings: seats.map((seat) => ({
            seatNumber: seat.seatNumber.toString(),
            passengerName: seat.passenger.fullName,
            passengerAge: seat.passenger.age,
            passengerGender: seat.passenger.gender,
        })),
    };
    const response: IBookingResponse = await API.post(
        apiRoutes.allBookings,
        body
    );
    const pnr = getPnrFromBookingResponse(response);
    return pnr;
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
    const response: IMyBookingsResponse = await API.get(apiRoutes.userBooking, {
        params: {
            page: 1,
            pageSize: 2000,
        },
    });
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

export const cancelBooking = async (
    bookingId: string
): Promise<ICancelBookingResponse> => {
    const res: ICancelBookingResponse = await API.post(
        `${apiRoutes.cancelBooking}/${bookingId}`
    );
    return res;
};
