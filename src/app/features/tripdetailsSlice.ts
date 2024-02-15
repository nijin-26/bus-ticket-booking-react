import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBusType, ISeatType, ITripDetailed } from '../../types';

const initialState: ITripDetailed = {
    id: '',
    origin: {
        id: '',
        name: '',
        shortCode: '',
    },
    destination: {
        id: '',
        name: '',
        shortCode: '',
    },
    departureTimestamp: new Date(),
    arrivalTimestamp: new Date(),
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
        setTripDetailsData: (state, action: PayloadAction<ITripDetailed>) => {
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
