import { API, apiRoutes } from '..';
import {
    ISeatStatus,
    ITrip,
    ITripDetailRequest,
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
    // TODO: replace with real API endpoint once availabe. Now using trips API with mock data for seats[].
    const response: ITripsQueryResponse = await API.get(apiRoutes.trip);
    const trip = response.trips.find((trip) => trip.id == id);
    if (!trip) return undefined;
    const tripDetail: ITripDetailResponse = { ...trip, seats: [] };
    for (let i = 1; i <= trip.totalSeats; i++) {
        tripDetail.seats.push({ seatNumber: i, status: ISeatStatus.AVAILABLE });
    }
    return tripDetail;
};
