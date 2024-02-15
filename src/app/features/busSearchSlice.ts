import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IBusSearchParams {
    originID?: number;
    destinationID?: number;
    tripDate?: Date;
    sortBy?: string;
    sortOrder?: string;
    seatType?: string;
    busType?: string;
    // passengerCount: number;
    page: number;
    pageSize: number;
}

interface IbusSearch {
    params: IBusSearchParams;
}

const initialState: IBusSearchParams = {
    // page: 1,
    // pageSize: 8,
};

export const busSearchSlice = createSlice({
    name: 'busSearch',
    initialState,
    reducers: {
        setBusSearchParams: () => {},
        setBusTypeFilter: () => {},
        setSeatTypeFilter: () => {},
        setSortParams: () => {},
        paginate: () => {},
    },
});
