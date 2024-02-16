import { API, apiRoutes } from '..';
import { ILocation } from '../../types';
import { getLocationFromLocationExternal } from '../converters/location.converter';
import { ILocationResponse } from '../types/location';

export const getAllUsers = async (): Promise<ILocation[]> => {
    const response: ILocationResponse = await API.get(apiRoutes.location);
    const locations: ILocation[] = response.locations.map((location) =>
        getLocationFromLocationExternal(location)
    );
    return locations;
};
