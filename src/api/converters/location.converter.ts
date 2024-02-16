import { ILocationExternal } from '../types/location';

export const getLocationFromLocationExternal = (
    locationExternal: ILocationExternal
) => {
    const location = {
        id: locationExternal.id.toString(),
        name: locationExternal.name,
        shortCode: locationExternal.shortCode,
    };
    return location;
};
