import { API } from '..';
import { ILocation, ILocationResponse } from '../types/locations';

export const getLocations = async (): Promise<ILocation[]> => {
    const response: ILocationResponse = await API.get('location');
    return response.locations;
};
