import { ITicket } from '../../types/ticket';
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
    id: string;
    pnrNumber: string;
    status: string;
    fare: string;
    trip: ITripExternal;
}

export interface IBookingRequest {
    tripId: number;
    bookings: IBookingExternal[];
}

export type IBookingResponse = ITicketExternal[];

export interface IBookingListingRequest {
    page: number;
    pageSize: number;
}

export interface IBookingListingResponse {
    bookings: ITicketExternal[];
}

export interface IMyBookingListingRequest extends IBookingListingRequest {}

export interface IMyBooking extends ITripExternal {
    bookings: Omit<ITicketExternal, 'trip'>[];
}

export type IMyBookingListingResponse = IMyBooking[];
