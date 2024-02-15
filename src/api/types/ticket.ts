import { ITicket, IPassengerSeat } from '../../types/ticket';

export interface ITicketRequest {
    pnrNumber: string;
}

export interface ITicketResponse extends ITicket {}

export interface IBookingRequest {
    tripId: string;
    seats: IPassengerSeat[];
}

export interface IBookingResponse extends ITicket {}
