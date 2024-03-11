import { test, expect } from 'vitest';
import {
    getSeatTypeFromSeatTypeExternal,
    getTripDetailedFromTripDetailedExternal,
    getTripFromTripExternal,
} from './trip.converter';
import {
    IBusType,
    ISeatStatus,
    ISeatType,
    ITrip,
    ITripDetailed,
} from '../../types';
import {
    ISeatTypeExternal,
    ITripDetailedExternal,
    ITripExternal,
} from '../types/trip';

test('getTripFromTripExternal should return the correct trip', () => {
    const tripExternal: ITripExternal = {
        id: 107,
        tripDate: '2024-05-13T18:30:00.000Z',
        departure: '2024-05-14T17:52:56.000Z',
        arrival: '2024-05-14T21:52:56.000Z',
        durationInHours: '3.5',
        busId: 'N1',
        busType: IBusType.AC,
        seatType: ISeatTypeExternal.Seater,
        totalSeats: 44,
        farePerSeat: '1140.00',
        origin: {
            id: 8,
            createdAt: '2024-02-13T03:20:13.404Z',
            updatedAt: '2024-02-13T03:20:13.404Z',
            name: 'Palakkad',
            shortCode: 'PLK',
        },
        destination: {
            id: 9,
            createdAt: '2024-02-13T03:20:17.108Z',
            updatedAt: '2024-02-13T03:20:17.108Z',
            name: 'Pathanamthitta',
            shortCode: 'PTA',
        },
    };

    const expectedTrip: ITrip = {
        id: '107',
        origin: {
            id: '8',
            name: 'Palakkad',
            shortCode: 'PLK',
        },
        destination: {
            id: '9',
            name: 'Pathanamthitta',
            shortCode: 'PTA',
        },
        departureTimestamp: new Date('2024-05-14T17:52:56.000Z'),
        arrivalTimestamp: new Date('2024-05-14T21:52:56.000Z'),
        farePerSeat: 1140,
        totalSeats: 46,
        busType: IBusType.AC,
        seatType: ISeatType.SEATER,
        availableSeats: 44,
    };

    const trip = getTripFromTripExternal(tripExternal);

    expect(trip).toEqual(expectedTrip);
});

test('getSeatTypeFromSeatTypeExternal should return the correct seat type', () => {
    const seatTypeExternal1: ISeatTypeExternal = ISeatTypeExternal.Sleeper;
    const seatType1 = getSeatTypeFromSeatTypeExternal(seatTypeExternal1);
    expect(seatType1).toEqual(ISeatType.SLEEPER);

    const seatTypeExternal2: ISeatTypeExternal = ISeatTypeExternal.Seater;
    const seatType2 = getSeatTypeFromSeatTypeExternal(seatTypeExternal2);
    expect(seatType2).toEqual(ISeatType.SEATER);
});

test('getTripDetailedFromTripDetailedExternal should return the correct trip detailed', () => {
    const tripDetailedExternal: ITripDetailedExternal = {
        id: 107,
        tripDate: '2024-05-13T18:30:00.000Z',
        departure: '2024-05-14T17:52:56.000Z',
        arrival: '2024-05-14T21:52:56.000Z',
        durationInHours: '3.5',
        busId: 'N1',
        busType: IBusType.AC,
        seatType: ISeatTypeExternal.Seater,
        totalSeats: 44,
        farePerSeat: '1140.00',
        origin: {
            id: 8,
            createdAt: '2024-02-13T03:20:13.404Z',
            updatedAt: '2024-02-13T03:20:13.404Z',
            name: 'Palakkad',
            shortCode: 'PLK',
        },
        destination: {
            id: 9,
            createdAt: '2024-02-13T03:20:17.108Z',
            updatedAt: '2024-02-13T03:20:17.108Z',
            name: 'Pathanamthitta',
            shortCode: 'PTA',
        },
        bookings: [
            {
                seatNumber: '1',
                passengerName: 'sss',
                passengerAge: 12,
                passengerGender: 'male',
            },
            {
                seatNumber: '17',
                passengerName: 'sera',
                passengerAge: 12,
                passengerGender: 'female',
            },
            {
                seatNumber: '30',
                passengerName: 'sera',
                passengerAge: 23,
                passengerGender: 'male',
            },
        ],
    };

    const expectedTripDetailed: ITripDetailed = {
        id: '107',
        origin: {
            id: '8',
            name: 'Palakkad',
            shortCode: 'PLK',
        },
        destination: {
            id: '9',
            name: 'Pathanamthitta',
            shortCode: 'PTA',
        },
        departureTimestamp: new Date('2024-05-14T17:52:56.000Z'),
        arrivalTimestamp: new Date('2024-05-14T21:52:56.000Z'),
        farePerSeat: 1140,
        totalSeats: 46,
        busType: IBusType.AC,
        seatType: ISeatType.SEATER,
        availableSeats: 44,
        seats: [],
    };

    for (let i = 1; i <= expectedTripDetailed.totalSeats; i++) {
        const seat = i === 1 || i === 17 || i === 30;
        expectedTripDetailed.seats.push({
            seatNumber: i,
            status: seat ? ISeatStatus.BOOKED : ISeatStatus.AVAILABLE,
        });
    }

    const tripDetailed =
        getTripDetailedFromTripDetailedExternal(tripDetailedExternal);

    expect(tripDetailed).toEqual(expectedTripDetailed);
});
