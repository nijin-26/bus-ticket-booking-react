import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBusType, ISeatType, ITripDetailResponse } from '../../api/types/trip';

const initialState: ITripDetailResponse = {
    id: '',
    origin: '',
    destination: '',
    departureTimestamp: '',
    arrivalTimestamp: '',
    seatType: ISeatType.SEATER,
    busType: IBusType.AC,
    farePerSeat: 0,
    availableSeats: 0,
    totalSeats: 0,
    seats: [],
};

const tripDetailsSlice = createSlice({
    name: 'tripDetails',
    initialState,
    reducers: {
        setTripDetailsData: (
            state,
            action: PayloadAction<ITripDetailResponse>
        ) => {
            state = action.payload;
            return state;
        },
        resetTripDetailsData: () => {
            return initialState;
        },
    },
});

export const { setTripDetailsData, resetTripDetailsData } =
    tripDetailsSlice.actions;

export default tripDetailsSlice.reducer;
