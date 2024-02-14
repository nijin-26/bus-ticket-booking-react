import { API, apiRoutes } from '..';
import { ITrip, ITripsQueryRequest, ITripsQueryResponse } from '../types/trip';

export const getTrips = async (
    params: ITripsQueryRequest
): Promise<ITrip[]> => {
    const response: ITripsQueryResponse = await API.get(apiRoutes.trip, {
        params,
    });
    return response.trips;
};
