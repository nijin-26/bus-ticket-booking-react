import { ITicket } from '../../types/ticket';
import { IUserExternal } from './user';
import { ITripExternal } from './trip';

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
    trip: ITripExternal;
    seatNumber: string;
    fare: string;
    status: string;
    pnrNumber: string;
    tripId: string;
    id: string;
    createdAt: string;
    updatedAt: string;
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
        id: string;
        pnrNumber: string;
        seatNumber: string;
        status: string;
        fare: string;
        passengerName: string;
        passengerAge: string;
        passengerGender: string;
    }[];
}

export interface IMyBookingsResponse {
    bookings: IPnrResponse[];
}
