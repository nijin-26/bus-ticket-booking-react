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
                age: booking.passengerAge,
                gender: booking.passengerGender as IGender,
            },
        })),
    };
    return ticket;
};

export const getPnrFromBookingResponse = (
    response: IBookingResponse
): string => {
    const pnr = response[0].pnrNumber;
    return pnr;
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
                age: booking.passengerAge,
                gender: booking.passengerGender as IGender,
            },
        })),
    };
    return ticket;
};

export const getTicketsFromMyBookingsResponse = (
    response: IMyBookingsResponse
): ITicket[] => {
    const tickets: ITicket[] = [];
    for (const tripBooking of response.bookings) {
        const tripTickets: Map<string, ITicket> = new Map();
        const trip = getTripFromTripExternal(tripBooking);
        for (const booking of tripBooking.bookings) {
            if (tripTickets.has(booking.pnrNumber)) {
                tripTickets.get(booking.pnrNumber)?.seats.push({
                    seatNumber: parseInt(booking.seatNumber),
                    passenger: {
                        fullName: booking.passengerName,
                        age: booking.passengerAge,
                        gender: booking.passengerGender as IGender,
                    },
                });
            } else {
                const ticket: ITicket = {
                    pnrNumber: booking.pnrNumber,
                    trip,
                    status: getTicketStatusFromExternal(booking.status),
                    seats: [
                        {
                            seatNumber: parseInt(booking.seatNumber),
                            passenger: {
                                fullName: booking.passengerName,
                                age: booking.passengerAge,
                                gender: booking.passengerGender as IGender,
                            },
                        },
                    ],
                };
                tripTickets.set(booking.pnrNumber, ticket);
            }
        }
        tickets.push(...Array.from(tripTickets.values()));
    }
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
