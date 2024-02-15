import { ILocation } from '../../types/location';

// TODO: Remove this export after migrating rest of the code
export type { ILocation };

export interface ILocationResponse {
    locations: ILocation[];
}
