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
    page?: number;
    pageSize: number;
    // passengerCount: number;
}

const initialState: IBusSearchParams = {
    page: 1,
    pageSize: 8,
};

export const busSearchSlice = createSlice({
    name: 'busSearch',
    initialState,
    reducers: {
        setBusSearchParams: (
            state,
            action: PayloadAction<IBusSearchParams>
        ) => {
            state.originID = action.payload.originID;
            state.destinationID = action.payload.destinationID;
            state.tripDate = action.payload.tripDate;
            state.seatType = action.payload.seatType;
            state.busType = action.payload.busType;
            state.sortBy = action.payload.sortBy;
            state.sortOrder = action.payload.sortOrder;
        },
    },
});

export const { setBusSearchParams } = busSearchSlice.actions;
export default busSearchSlice.reducer;
