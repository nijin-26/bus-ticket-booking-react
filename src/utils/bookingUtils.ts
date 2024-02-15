import { ISeat, ISeatStatus } from '../api/types/trip';

interface Ipdetails {
    fullName: string;
    age: string;
    gender: string;
}
interface IPassengers extends Ipdetails {
    seatNumber: number;
}
export interface IPassengersInput {
    passengers: IPassengers[];
}
// interface Iseats {
//     seatNumber: number;
//     passenger: Ipdetails;
// }

// export interface ITripDetailPayload {
//     tripId: number;
//     seats: Iseats;
// }

export const converterFun = (obj: IPassengersInput, tripId: number) => {
    const passengersArray = obj.passengers;
    const convertedPassengersArray = passengersArray.map((each) => {
        const { seatNumber, fullName, age, gender } = each;
        return {
            seatNumber,
            passengerName: fullName,
            passengerAge: age,
            passengerGender: gender,
        };
    });
    return { tripId: tripId, bookings: convertedPassengersArray };
};

export const filterSelectedSeats = (arr: ISeat[]) => {
    const filteredSelectedSeats: number[] = arr
        .filter((each) => each.status === ISeatStatus.SELECTED)
        .map((each) => each.seatNumber);

    return filteredSelectedSeats;
};
