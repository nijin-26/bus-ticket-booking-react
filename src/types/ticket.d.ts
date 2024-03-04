import { ITrip } from ".";

export interface ITicket {
    pnrNumber: string;
    trip: ITrip;
    seats: IPassengerSeat[];
    status: ITicketStatus;
}

export interface IPassengerSeat {
    seatNumber: number;
    passenger: IPassenger;
}

export interface IPassenger {
    fullName: string;
    age: number;
    gender: IGender;
}

export enum IGender {
    MALE = 'male',
    FEMALE = 'female',
}

export enum ITicketStatus {
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
}