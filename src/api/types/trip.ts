import { IBusType, ISeatType } from '../../types';
import { ILocationExternal } from './location';
import { IBookingExternal } from './ticket';

export interface ITripExternal {
    id: number;
    tripDate: string;
    departure: string;
    arrival: string;
    durationInHours: string;
    busId: string;
    busType: IBusType;
    seatType: ISeatTypeExternal;
    totalSeats: number;
    farePerSeat: string;
    origin: ILocationExternal;
    destination: ILocationExternal;
}

export interface ITripDetailedExternal extends ITripExternal {
    // ignoring extra details in each booking since its not needed in frontend
    bookings: IBookingExternal[];
}

export interface ITripsQueryRequest {
    originId: string;
    destinationId: string;
    tripDate: string;
    sortBy?: ITripsSortKey;
    sortOrder?: ISortOrder;
    page: number;
    pageSize: number;
    seatType?: ISeatType;
    busType?: IBusType;
    passengerCount?: number;
}

export interface ITripsQueryResponse {
    trips: ITripExternal[];
    resultCount: number;
}

export interface IAllTripsResponse {
    trips: ITripExternal[];
}

export interface ITripDetailRequest {
    id: string;
}

export interface ITripDetailResponse {
    trip: ITripDetailedExternal;
}

export enum ITripsSortKey {
    DEPARTURE_TIMESTAMP = 'departure',
    FARE = 'farePerSeat',
    SEATS_AVAILABLE = 'totalSeats',
}

export enum ISortOrder {
    ASC = 'ASC',
    DESC = 'DESC',
}

// export interface ITripsQueryResponse {
//     trips: ITrip[];
// }

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

export enum ISeatStatus {
    BOOKED = 'BOOKED',
    AVAILABLE = 'AVAILABLE',
    SELECTED = 'SELECTED',
}

// export enum ISeatType {
//     SLEEPER = 'SLEEPER',
//     SEATER = 'SEATER',
// }

// export enum IBusType {
//     AC = 'AC',
//     NON_AC = 'NON_AC',
// }
