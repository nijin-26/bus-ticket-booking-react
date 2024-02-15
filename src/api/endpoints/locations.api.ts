import { API, apiRoutes } from '..';
import { ILocation, ILocationResponse } from '../types/location';

export const getLocations = async (): Promise<ILocation[]> => {
    const response: ILocationResponse = await API.get(apiRoutes.location);
    return response.locations;
};
