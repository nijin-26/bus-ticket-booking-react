import { API, apiRoutes } from '..';
import { ISeatStatus, ITrip, ITripDetailed } from '../../types';
import {
    getTripDetailedFromTripDetailedExternal,
    getTripFromTripExternal,
} from '../converters/trip.converter';
import {
    ITripDetailResponse,
    ITripsQueryRequest,
    ITripsQueryResponse,
} from '../types/trip';

export interface IGetTripsReturn {
    trips: ITrip[];
    resultCount: number;
}

export const getTrips = async (
    params: ITripsQueryRequest
): Promise<IGetTripsReturn> => {
    const response: ITripsQueryResponse = await API.get(apiRoutes.tripSearch, {
        params,
    });
    const trips = response.trips.map((trip) => getTripFromTripExternal(trip));
    return { trips, resultCount: response.resultCount };
};

export const getAllTrips = async (): Promise<ITrip[]> => {
    const response: ITripsQueryResponse = await API.get(apiRoutes.trip);
    const trips = response.trips.map((trip) => getTripFromTripExternal(trip));
    return trips;
};

export const getTrip = async (
    id: string
): Promise<ITripDetailed | undefined> => {
    const response: ITripDetailResponse = await API.get(
        apiRoutes.trip + '/' + id
    );
    const tripDetail = getTripDetailedFromTripDetailedExternal(response.trip);
    return tripDetail;
};
