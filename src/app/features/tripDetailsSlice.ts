import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBusType, ISeatType, ITripDetailedSerializable } from '../../types';

const initialState: ITripDetailedSerializable = {
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
    departureTimestamp: new Date().toISOString(),
    arrivalTimestamp: new Date().toISOString(),
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
            action: PayloadAction<ITripDetailedSerializable>
        ) => {
            return action.payload
        },
        resetTripDetailsData: () => {
            return initialState;
        },
    },
});

export const { setTripDetailsData, resetTripDetailsData } =
    tripDetailsSlice.actions;

export default tripDetailsSlice.reducer;
