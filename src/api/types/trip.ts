import { IBusType, ISeat, ISeatType, ITrip } from '../../types';
import { ILocation } from './location';

// TODO: Remove this export after migrating rest of the code
export type { IBusType, ISeat, ISeatType, ITrip };

interface ITripExternal {
    id: number;
    createdAt: string;
    updatedAt: string;
    originId: number;
    destinationId: number;
    tripDate: string;
    departure: string;
    arrival: string;
    durationInHours: string;
    busId: string;
    busType: string;
    seatType: string;
    totalSeats: number;
    farePerSeat: string;
    publish: boolean;
    creatorId: string;
    origin: ILocation;
    destination: ILocation;
    creator: unknown;
}

interface ITripDetailExternal extends ITripExternal {
    seats: ISeat[];
}

export interface ITripsQueryRequest {
    originId: string;
    destinationId: string;
    tripDate: string;
    sortBy: ITripsSortKey;
    sortOrder: ISortOrder;
    page: number;
    pageSize: number;
    seatType?: ISeatType;
    busType?: IBusType;
    passengerCount?: number;
}

export interface ITripsQueryResponse {
    trips: ITripExternal[];
}

export interface ITripDetailRequest {
    id: string;
}

export interface ITripDetailResponse extends ITripDetailExternal {}

export enum ITripsSortKey {
    DEPARTURE_TIMESTAMP = 'departureTimestamp',
    ARRIVAL_TIMESTAMP = 'arrivalTimestamp',
    FARE = 'fare',
}

export enum ISortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}
