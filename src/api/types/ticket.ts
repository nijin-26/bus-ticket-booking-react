import { ITicket, IPassengerSeat } from '../../types/ticket';

// TODO: Remove this export after migrating rest of the code
export type { ITicket, IPassengerSeat };

export interface ITicketRequest {
    pnrNumber: string;
}

export interface ITicketResponse extends ITicket {}

export interface IBookingRequest {
    tripId: string;
    seats: IPassengerSeat[];
}

export interface IBookingResponse extends ITicket {}
