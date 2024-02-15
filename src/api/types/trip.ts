import { IBusType, ISeatType } from '../../types';
import { ILocationExternal } from './location';

export interface ITripExternal {
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
    busType: IBusType;
    seatType: ISeatType;
    totalSeats: number;
    farePerSeat: string;
    publish: boolean;
    creatorId: string;
    origin: ILocationExternal;
    destination: ILocationExternal;
    creator: unknown;
}

// export interface ITripDetailedExternal extends ITripExternal {
//     seats: ISeat[];
// }

export interface ITripDetailedExternal {
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
    busType: IBusType;
    seatType: ISeatType;
    totalSeats: number;
    farePerSeat: string;
    publish: boolean;
    creatorId: string;
    origin: ILocationExternal;
    destination: ILocationExternal;
    creator: unknown;
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

export interface ITripDetailResponse {
    trip: ITripDetailedExternal;
}

export enum ITripsSortKey {
    DEPARTURE_TIMESTAMP = 'departureTimestamp',
    ARRIVAL_TIMESTAMP = 'arrivalTimestamp',
    FARE = 'fare',
}

export enum ISortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}
