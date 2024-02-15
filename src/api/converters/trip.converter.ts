import { ITrip, ITripDetailed } from '../../types';
import { ITripExternal, ITripDetailedExternal } from '../types/trip';
import { getLocationFromLocationExternal } from './location.converter';

export const getTripFromTripExternal = (tripExternal: ITripExternal): ITrip => {
    const trip: ITrip = {
        id: tripExternal.id.toString(),
        origin: getLocationFromLocationExternal(tripExternal.origin),
        destination: getLocationFromLocationExternal(tripExternal.destination),
        departureTimestamp: new Date(tripExternal.departure),
        arrivalTimestamp: new Date(tripExternal.arrival),
        farePerSeat: parseFloat(tripExternal.farePerSeat),
        totalSeats: tripExternal.totalSeats,
        busType: tripExternal.busType,
        seatType: tripExternal.seatType,
        // TODO: use real data once API provides availableSeats
        availableSeats: 0,
    };
    return trip;
};

export const getTripDetailedFromTripDetailedExternal = (
    tripDetailedExternal: ITripDetailedExternal
) => {
    const tripDetailed: ITripDetailed = {
        ...getTripFromTripExternal(tripDetailedExternal),
        seats: tripDetailedExternal.seats,
    };
    return tripDetailed;
};
