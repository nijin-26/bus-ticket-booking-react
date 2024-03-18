import { ILocationExternal } from '../types/location';
import { ILocation } from '../../types';

export const getLocationFromLocationExternal = (
    locationExternal: ILocationExternal
) => {
    const location: ILocation = {
        id: locationExternal.id.toString(),
        // capitalizing first letter and rest to lowercase
        name:
            locationExternal.name.charAt(0).toUpperCase() +
            locationExternal.name.substring(1).toLowerCase(),
        shortCode: locationExternal.shortCode,
    };

    return location;
};
