import { ITrip } from '../../types';
import { ITripExternal } from '../types/trip';
import { getLocationFromLocationExternal } from './location.converter';

export const getTripFromTripExternal = (tripExternal: ITripExternal): ITrip => {
    try {
        const trip: ITrip = {
            id: tripExternal.id.toString(),
            origin: getLocationFromLocationExternal(tripExternal.origin),
            destination: getLocationFromLocationExternal(
                tripExternal.destination
            ),
            departureTimestamp: new Date(tripExternal.departure),
            arrivalTimestamp: new Date(tripExternal.arrival),
            farePerSeat: parseFloat(tripExternal.farePerSeat),
            totalSeats: tripExternal.totalSeats,
            busType: tripExternal.busType,
            seatType: tripExternal.seatType,
            // TODO: use real data once API provides availableSeats
            availableSeats: tripExternal.totalSeats,
        };
        return trip;
    } catch (error) {
        console.error('Error in getTripFromTripExternal', error, tripExternal);
        throw error;
    }
};

// export const getTripDetailedFromTripDetailedExternal = (
//     tripDetailedExternal: ITripDetailedExternal,
// ) => {
//     const tripDetailed: ITripDetailed = {
//         ...getTripFromTripExternal(tripDetailedExternal),
//         seats: tripDetailedExternal.seats,
//     };
//     return tripDetailed;
// };
