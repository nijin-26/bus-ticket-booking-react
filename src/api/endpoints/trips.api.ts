import { API, apiRoutes } from '..';
import {
    ITrip,
    ITripDetailResponse,
    ITripsQueryRequest,
    ITripsQueryResponse,
} from '../types/trip';

export const getTrips = async (
    params: ITripsQueryRequest
): Promise<ITrip[]> => {
    const response: ITripsQueryResponse = await API.get(apiRoutes.trip, {
        params,
    });
    return response.trips;
};

export const getTrip = async (
    id: string
): Promise<ITripDetailResponse | undefined> => {
    const tripDetail: ITripDetailResponse = await API.get(
        apiRoutes.trip + '/' + id
    );
    return tripDetail;
};
