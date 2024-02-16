import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface IBusSearchParams {
    originID?: number;
    destinationID?: number;
    tripDate?: Date;
    sortBy?: string;
    sortOrder?: string;
    seatType?: string | null;
    busType?: string | null;
    page?: number;
    pageSize?: number;
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
        },

        // sort reducer
        setSort: (state, action: PayloadAction<IsortObject>) => {
            state.sortBy = action.payload.sortBy;
            state.sortOrder = action.payload.sortOrder;
        },

        // filter reducers
        addBusFilter: (state, action: PayloadAction<string>) => {
            state.busType = action.payload;
        },

        addSeatFilter: (state, action: PayloadAction<string>) => {
            state.seatType = action.payload;
        },

        removeBusFilter: (state) => {
            state.busType = undefined;
        },

        removeSeatFilter: (state) => {
            state.seatType = undefined;
        },
    },
});

export const {
    setBusSearchParams,
    addBusFilter,
    addSeatFilter,
    removeBusFilter,
    removeSeatFilter,
} = busSearchSlice.actions;

export default busSearchSlice.reducer;
