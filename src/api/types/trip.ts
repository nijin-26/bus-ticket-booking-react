import { IBusType, ISeat, ISeatType, ITrip, ITripDetailed } from '../../types';

// TODO: Remove this export after migrating rest of the code
export type { IBusType, ISeat, ISeatType, ITrip };

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

export enum ITripsSortKey {
    DEPARTURE_TIMESTAMP = 'departureTimestamp',
    ARRIVAL_TIMESTAMP = 'arrivalTimestamp',
    FARE = 'fare',
}

export enum ISortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

export interface ITripsQueryResponse {
    trips: ITrip[];
}

export interface ITripDetailRequest {
    id: string;
}

export interface ITripDetailResponse extends ITripDetailed {}
