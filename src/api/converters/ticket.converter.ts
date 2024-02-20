import { IGender, ITicket, ITripTicket } from '../../types';
import {
    IBookingListingResponse,
    IBookingResponse,
    ITicketExternal,
    ITripTicketExternal,
} from '../types/ticket';

const getTicketFromTicketExternals = (
    ticketExternals: ITicketExternal[]
): ITicket => {
    const ticket: ITicket = {
        pnrNumber: ticketExternals[0].pnrNumber,
        trip: getTripTicketFromTripTicketExternal(ticketExternals[0].trip),
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

export const getTripTicketFromTripTicketExternal = (
    tripExternal: ITripTicketExternal
): ITripTicket => {
    const trip: ITripTicket = {
        id: tripExternal.id.toString(),
        originId: tripExternal.originId.toString(),
        destinationId: tripExternal.destinationId.toString(),
        departureTimestamp: new Date(tripExternal.departure),
        arrivalTimestamp: new Date(tripExternal.arrival),
        farePerSeat: parseFloat(tripExternal.farePerSeat),
        totalSeats: 46,
        busType: tripExternal.busType,
        seatType: tripExternal.seatType,
        availableSeats: tripExternal.totalSeats,
    };
    return trip;
};
