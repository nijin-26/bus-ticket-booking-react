import { API, apiRoutes } from '..';
import { ISeatStatus, ITrip, ITripDetailed } from '../../types';
import {
    getTripFromTripExternal,
} from '../converters/trip.converter';
import {
    ITripsQueryRequest,
    ITripsQueryResponse,
} from '../types/trip';

export const getTrips = async (
    params: ITripsQueryRequest
): Promise<ITrip[]> => {
    const response: ITripsQueryResponse = await API.get(apiRoutes.tripSearch, {
        params,
    });
    const trips = response.trips.map((trip) => getTripFromTripExternal(trip));
    return trips;
};

export const getAllTrips = async (): Promise<ITrip[]> => {
    const response: ITripsQueryResponse = await API.get(apiRoutes.trip);
    const trips = response.trips.map((trip) => getTripFromTripExternal(trip));
    return trips;
};

export const getTrip = async (
    id: string
): Promise<ITripDetailed | undefined> => {
    // TODO: use real API once it's corrected
    // const response: ITripDetailResponse = await API.get(
    //     apiRoutes.trip + '/' + id
    // );
    const trips = await getAllTrips();
    const trip = trips.find((trip) => trip.id === id);
    if (!trip) {
        return undefined;
    }
    const tripDetail: ITripDetailed = {
        ...trip,
        seats: [],
    };
    for (let i = 1; i <= trip.totalSeats; i++) {
        tripDetail.seats.push({
            seatNumber: i,
            status: ISeatStatus.AVAILABLE,
        });
    }
    return tripDetail;
};
