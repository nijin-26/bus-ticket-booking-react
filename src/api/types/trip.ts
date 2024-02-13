export interface ITripsQueryRequest {
    origin: string;
    destination: string;
    departureDate: string;
    sortBy: ITripsSortKey;
    sortOrder: ISortOrder;
    pageNumber: number;
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
    farePerSeat: number;
    availableSeats: number;
    totalSeats: number;
}

export interface ISeat {
    seatNumber: number;
    status: ISeatStatus;
}

export enum ISeatType {
    SLEEPER = 'SLEEPER',
    SEATER = 'SEATER',
}

export enum IBusType {
    AC = 'AC',
    NON_AC = 'NON_AC',
}

export enum ISeatStatus {
    BOOKED = 'BOOKED',
    AVAILABLE = 'AVAILABLE',
    SELECTED = 'SELECTED',
}
