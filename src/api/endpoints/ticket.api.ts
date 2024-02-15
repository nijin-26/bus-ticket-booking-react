import { IBookingRequest, IBookingResponse } from '../types/ticket';

export const bookTicket = async (
    body: IBookingRequest
): Promise<IBookingResponse> => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // TODO: replace mock data with actual API call
    const response: IBookingResponse = {
        pnrNumber: '123456',
        tripId: body.tripId,
        seats: body.seats,
    };
    return response;
};
