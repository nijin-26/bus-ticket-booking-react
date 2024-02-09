import { IBooking } from '../api/types/bookings';

export interface IPagination {
    loading: boolean;
    page: number;
    pageSize: number;
    totalNumberOfData: number;
    data: IBooking[] | [];
}
