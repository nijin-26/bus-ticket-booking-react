import { ILocation } from './location';

export interface ITrip {
    id: string;
    origin: ILocation;
    destination: ILocation;
    departureTimestamp: Date;
    arrivalTimestamp: Date;
    seatType: ISeatType;
    busType: IBusType;
    farePerSeat: number;
    availableSeats: number;
    totalSeats: number;
}

export interface ITripDetailed extends ITrip {
    seats: ISeat[];
}

export interface ISeat {
    seatNumber: number;
    status: ISeatStatus;
}

export enum ISeatType {
    SLEEPER = 'SLEEPER',
    Sleeper = 'Sleeper',
    SEATER = 'SEATER',
}

export enum IBusType {
    AC = 'AC',
    NON_AC = 'NON_AC',
}

export enum ISeatStatus {
    BOOKED = 'BOOKED',
    AVAILABLE = 'AVAILABLE',
}
