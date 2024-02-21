import { IBusType, ISeatType } from '../../types';
import { ITicket } from '../../types/ticket';
import { IUserExternal } from './user';

export interface ITicketRequest {
    pnrNumber: string;
}

export interface ITicketResponse extends ITicket {}

export interface IBookingExternal {
    seatNumber: string;
    passengerName: string;
    passengerAge: string;
    passengerGender: string;
}

export interface ITicketExternal extends IBookingExternal {
    trip: ITripTicketExternal;
    seatNumber: string;
    fare: string;
    bookedBy: IUserExternal;
    status: string;
    pnrNumber: string;
    tripId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
}

export interface ITripTicketExternal {
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
    creator: unknown;
}

export interface IBookingRequest {
    tripId: number;
    bookings: IBookingExternal[];
}

export type IBookingResponse = ITicketExternal[];

export interface IBookingListingResponse {
    bookings: ITicketExternal[];
}
