import { ITicket } from '../../types/ticket';
import { ITripExternal } from './trip';

export interface ITicketRequest {
    pnrNumber: string;
}

export interface ITicketResponse extends ITicket {}

export interface IBookingExternal {
    seatNumber: string;
    passengerName: string;
    passengerAge: number;
    passengerGender: string;
}

export interface ITicketExternal extends IBookingExternal {
    trip: ITripExternal;
    seatNumber: string;
    fare: string;
    status: ITicketStatusExternal;
    pnrNumber: string;
    id: number;
}

export interface IBookingRequest {
    tripId: number;
    bookings: IBookingExternal[];
}

export type IBookingResponse = ITicketExternal[];

export interface IBookingListingResponse {
    bookings: ITicketExternal[];
}

export interface IPnrResponse extends ITripExternal {
    bookings: {
        id: number;
        pnrNumber: string;
        seatNumber: string;
        fare: string;
        passengerName: string;
        passengerAge: number;
        passengerGender: string;
        status: ITicketStatusExternal;
    }[];
}

export interface IMyBookingsResponse {
    bookings: IPnrResponse[];
    resultCount: number;
}

export interface ICancelBookingResponse {
    pnrNumber: string;
}

export enum ITicketStatusExternal {
    Confirmed = 'confirmed',
    Cancelled = 'cancelled',
}
