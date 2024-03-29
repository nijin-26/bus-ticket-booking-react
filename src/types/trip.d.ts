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

export type ITripDetailedSerializable = {
    departureTimestamp: string;
    arrivalTimestamp: string;
} & Omit<ITripDetailed, 'departureTimestamp' | 'arrivalTimestamp'>;

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
