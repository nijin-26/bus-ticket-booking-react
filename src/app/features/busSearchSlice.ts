import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IBusType, ISeatType } from '../../types';
import { ISortOrder, ITripsSortKey } from '../../api/types/trip';

interface IBusSearchParams {
    originId?: number;
    destinationId?: number;
    tripDate?: string;
    sortBy?: ITripsSortKey;
    sortOrder?: ISortOrder;
    seatType?: ISeatType;
    busType?: IBusType;
}

const initialState: IBusSearchParams = {};

export const busSearchSlice = createSlice({
    name: 'busSearch',
    initialState,
    reducers: {
        setBusSearchParams: (
            state,
            action: PayloadAction<IBusSearchParams>
        ) => {
            state.originId = action.payload.originId;
            state.destinationId = action.payload.destinationId;
            state.tripDate = action.payload.tripDate;
        },

        // sort reducer
        setSort: (
            state,
            action: PayloadAction<{
                sortBy: ITripsSortKey;
                sortOrder: ISortOrder;
            }>
        ) => {
            state.sortBy = action.payload.sortBy;
            state.sortOrder = action.payload.sortOrder;
        },

        // filter reducers
        addBusFilter: (state, action: PayloadAction<IBusType>) => {
            state.busType = action.payload;
        },

        addSeatFilter: (state, action: PayloadAction<ISeatType>) => {
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
    setSort,
} = busSearchSlice.actions;

export default busSearchSlice.reducer;
