import { IGender, ITicket } from '../../types';
import {
    IBookingListingResponse,
    IBookingResponse,
    IMyBookingListingResponse,
    ITicketExternal,
} from '../types/ticket';
import { getTripFromTripExternal } from './trip.converter';

const getTicketFromTicketExternals = (
    ticketExternals: ITicketExternal[]
): ITicket => {
    const ticket: ITicket = {
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

export const getTicketsFromMyBookingListingResponse = (
    response: IMyBookingListingResponse
): ITicket[] => {
    const ticketExternal = new Map<string, ITicketExternal[]>();
    for (const trip of response) {
        for (const booking of trip.bookings) {
            const ticket = {
                ...booking,
                trip: trip,
            };
            if (ticketExternal.has(booking.pnrNumber)) {
                ticketExternal.get(booking.pnrNumber)?.push(ticket);
            } else {
                ticketExternal.set(booking.pnrNumber, [ticket]);
            }
        }
    }
    const tickets = Array.from(ticketExternal.values()).map((ticket) =>
        getTicketFromTicketExternals(ticket)
    );
    return tickets;
};
