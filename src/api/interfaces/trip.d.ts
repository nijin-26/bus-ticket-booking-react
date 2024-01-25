export interface ITripsQueryRequest {
    origin: string;
    destination: string;
    departureDate: string;
    sortBy: ITripsSortKey;
    sortOrder: ISortOrder;
    page: number;
    pageSize: number;
    seatType?: ISeatType;
    busType?: IBusType;
    passengerCount?: number;
}

export type ITripsSortKey = 'departureTimestamp' | 'arrivalTimestamp' | 'fare';
export type ISortOrder = 'ASC' | 'DESC';

export interface ITripsQueryResponse {
    trips: ITrip[];
}

export interface ITripDetailRequest {
    id: string;
}

export interface ITripDetailResponse extends ITrip {
    seats: ISeat[];
}

export interface ITrip {
    id: string;
    origin: string;
    destination: string;
    departureTimestamp: string;
    arrivalTimestamp: string;
    seatType: ISeatType;
    busType: IBusType;
    fare: number;
    availableSeats: number;
    totalSeats: number;
}

export interface ISeat {
    seatNumber: number;
    status: ISeatStatus;
}

export type ISeatType = 'SLEEPER' | 'SEMI_SLEEPER' | 'SEATER';
export type IBusType = 'AC' | 'NON_AC';
export type ISeatStatus = 'BOOKED' | 'AVAILABLE';
