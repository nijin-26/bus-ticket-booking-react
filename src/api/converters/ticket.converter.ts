import { IGender, ITicket, ITicketStatus } from '../../types';
import {
    IBookingListingResponse,
    IBookingResponse,
    IMyBookingsResponse,
    IPnrResponse,
    ITicketExternal,
    ITicketStatusExternal,
} from '../types/ticket';
import { getTripFromTripExternal } from './trip.converter';

const getTicketFromTicketExternals = (
    ticketExternals: ITicketExternal[]
): ITicket => {
    const ticket: ITicket = {
        status: getTicketStatusFromExternal(ticketExternals[0].status),
        pnrNumber: ticketExternals[0].pnrNumber,
        trip: getTripFromTripExternal(ticketExternals[0].trip),
        seats: ticketExternals.map((booking) => ({
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

export const getTicketFromBookingResponse = (
    response: IBookingResponse
): ITicket => {
    const ticket = getTicketFromTicketExternals(response);
    return ticket;
};

export const getTicketsFromBookingListingResponse = (
    response: IBookingListingResponse
): ITicket[] => {
    const ticketExternal = new Map<string, ITicketExternal[]>();
    for (const booking of response.bookings) {
        if (ticketExternal.has(booking.pnrNumber)) {
            ticketExternal.get(booking.pnrNumber)?.push(booking);
        } else {
            ticketExternal.set(booking.pnrNumber, [booking]);
        }
    }
    const tickets = Array.from(ticketExternal.values()).map((ticket) =>
        getTicketFromTicketExternals(ticket)
    );
    return tickets;
};

export const getTicketFromPnrResponse = (response: IPnrResponse): ITicket => {
    const pnrNumber = response.bookings[0].pnrNumber;
    const trip = getTripFromTripExternal(response);
    const ticket: ITicket = {
        pnrNumber,
        trip,
        status: getTicketStatusFromExternal(response.bookings[0].status),
        seats: response.bookings.map((booking) => ({
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

export const getTicketsFromMyBookingsResponse = (
    response: IMyBookingsResponse
): ITicket[] => {
    const tickets = response.bookings.map((pnr) =>
        getTicketFromPnrResponse(pnr)
    );
    return tickets;
};

export const getTicketStatusFromExternal = (
    status: ITicketStatusExternal
): ITicketStatus => {
    switch (status) {
        case ITicketStatusExternal.Confirmed:
            return ITicketStatus.CONFIRMED;
        case ITicketStatusExternal.Cancelled:
            return ITicketStatus.CANCELLED;
    }
};
