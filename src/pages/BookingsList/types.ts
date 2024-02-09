import { IBooking } from "../../api/types/bookings";

export interface IPageState {
    loading: boolean;
    page: number;
    pageSize: number;
    totalBookings: number;
    bookingsList: IBooking[] | [];
}
