import apiClient from '../axios';
import { ILocation, ILocationResponse } from '../types/locations';
import { ITrip, ITripsQueryRequest, ITripsQueryResponse } from '../types/trip';

/*
originId:1
destinationId:2
tripDate:2024-03-01
sortBy:departureTimestamp
sortOrder:ASC
page:1
pageSize:3
seatType:SLEEPER
busType:AC
passengerCount:2 */

export const getTrips = async (
    params: ITripsQueryRequest
): Promise<ITrip[]> => {
    const response: ITripsQueryResponse = await apiClient.get('/trip', {
        params,
    });
    return response.trips;
};
