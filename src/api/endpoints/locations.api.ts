import apiClient from '../axios';
import { ILocation, ILocationResponse } from '../types/locations';

export const getLocations = async (): Promise<ILocation[]> => {
    const response: ILocationResponse = await apiClient.get('location');
    return response.locations;
};
