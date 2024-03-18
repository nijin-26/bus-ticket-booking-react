import { ILocationExternal } from '../types/location';
import { ILocation } from '../../types';

export const getLocationFromLocationExternal = (
    locationExternal: ILocationExternal
) => {
    const location: ILocation = {
        id: locationExternal.id.toString(),
        name: locationExternal.name,
        shortCode: locationExternal.shortCode,
    };
    return location;
};
