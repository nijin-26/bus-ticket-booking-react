import { ISeatStatus, ISeatType, ITrip, ITripDetailed } from '../../types';
import {
    ISeatTypeExternal,
    ITripDetailedExternal,
    ITripExternal,
} from '../types/trip';
import { getLocationFromLocationExternal } from './location.converter';

export const getTripFromTripExternal = (tripExternal: ITripExternal): ITrip => {
    const trip: ITrip = {
        id: tripExternal.id.toString(),
        origin: getLocationFromLocationExternal(tripExternal.origin),
        destination: getLocationFromLocationExternal(tripExternal.destination),
        departureTimestamp: new Date(tripExternal.departure),
        arrivalTimestamp: new Date(tripExternal.arrival),
        farePerSeat: parseFloat(tripExternal.farePerSeat),
        totalSeats: 46,
        busType: tripExternal.busType,
        seatType: getSeatTypeFromSeatTypeExternal(tripExternal.seatType),
        availableSeats: tripExternal.totalSeats,
    };
    return trip;
};

export const getSeatTypeFromSeatTypeExternal = (
    seatTypeExternal: ISeatTypeExternal
): ISeatType => {
    switch (seatTypeExternal) {
        case ISeatTypeExternal.Sleeper:
        case ISeatTypeExternal.SLEEPER:
            return ISeatType.SLEEPER;
        case ISeatTypeExternal.SEATER:
            return ISeatType.SEATER;
    }
};

export const getTripDetailedFromTripDetailedExternal = (
    tripDetailedExternal: ITripDetailedExternal
) => {
    const tripDetailed: ITripDetailed = {
        ...getTripFromTripExternal(tripDetailedExternal),
        seats: [],
    };
    for (let i = 1; i <= tripDetailed.totalSeats; i++) {
        const seat = tripDetailedExternal.bookings.find(
            (booking) => booking.seatNumber === i.toString()
        );
        tripDetailed.seats.push({
            seatNumber: i,
            status: seat ? ISeatStatus.BOOKED : ISeatStatus.AVAILABLE,
        });
    }
    return tripDetailed;
};
