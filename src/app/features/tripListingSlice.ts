import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ITrip } from '../../types';

const initialState: ITrip[] = [];

const tripListingSlice = createSlice({
    name: 'tripListing',
    initialState,
    reducers: {
        setTripListingData: (state, action: PayloadAction<ITrip[]>) => {
            state = action.payload;
            return state;
        },
    },
});

export const { setTripListingData } = tripListingSlice.actions;

export default tripListingSlice.reducer;
