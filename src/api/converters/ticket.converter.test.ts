import { test, expect } from 'vitest';
import {
    IBookingListingResponse,
    ITicketStatusExternal,
} from '../types/ticket.ts';
import {
    IBusType,
    IGender,
    ISeatType,
    ITicket,
    ITicketStatus,
} from '../../types';
import {
    getTicketStatusFromExternal,
    getTicketsFromBookingListingResponse,
} from './ticket.converter.ts';
import { ISeatTypeExternal } from '../types/trip.ts';

test('getTicketStatusFromExternal should return the correct data', () => {
    const status: ITicketStatusExternal = ITicketStatusExternal.Confirmed;
    const expectedStatus = ITicketStatus.CONFIRMED;
    expect(getTicketStatusFromExternal(status)).toEqual(expectedStatus);
});

test('getTicketsFromBookingListingResponse should return the correct data', () => {
    const response: IBookingListingResponse = {
        bookings: [
            {
                id: 1,
                pnrNumber: '20bs9s',
                seatNumber: '14',
                status: ITicketStatusExternal.Confirmed,
                fare: '1000.00',
                passengerName: 'Adam',
                passengerAge: 30,
                passengerGender: 'male',
                trip: {
                    id: 2,
                    tripDate: '2024-02-29T18:30:00.000Z',
                    departure: '2024-03-01T17:52:56.000Z',
                    arrival: '2024-03-01T21:52:56.000Z',
                    durationInHours: '3',
                    busId: 'A1',
                    busType: IBusType.AC,
                    seatType: ISeatTypeExternal.Sleeper,
                    totalSeats: 36,
                    farePerSeat: '1000.00',
                    origin: {
                        id: 1,
                        name: 'KochI',
                        shortCode: 'COK',
                    },
                    destination: {
                        id: 2,
                        name: 'Trivandrum',
                        shortCode: 'TRV',
                    },
                },
            },
        ],
    };
    const expectedTickets: ITicket[] = [
        {
            status: ITicketStatus.CONFIRMED,
            pnrNumber: '20bs9s',
            trip: {
                id: '2',
                origin: {
                    id: '1',
                    name: 'KochI',
                    shortCode: 'COK',
                },
                destination: {
                    id: '2',
                    name: 'Trivandrum',
                    shortCode: 'TRV',
                },
                departureTimestamp: new Date('2024-03-01T17:52:56.000Z'),
                arrivalTimestamp: new Date('2024-03-01T21:52:56.000Z'),
                farePerSeat: 1000,
                totalSeats: 46,
                busType: IBusType.AC,
                seatType: ISeatType.SLEEPER,
                availableSeats: 36,
            },
            seats: [
                {
                    seatNumber: 14,
                    passenger: {
                        fullName: 'Adam',
                        age: 30,
                        gender: IGender.MALE,
                    },
                },
            ],
        },
    ];
    expect(getTicketsFromBookingListingResponse(response)).toEqual(
        expectedTickets
    );
});
