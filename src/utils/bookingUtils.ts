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

//  interface ITripDetailPayload {
//     tripId: number;
//     seats: Iseats;
// }

export const converterFun = (obj: IPassengersInput) => {
    const passengersArray = obj.passengers;
    const convertedPassengersArray = passengersArray.map((each) => {
        {
            each.seatNumber, { ...each };
        }
    });
    return { tripId: 1, convertedPassengersArray };
};

export const filterSelectedSeats = (arr: ISeat[]) => {
    const filteredSelectedSeats: number[] = arr
        .filter((each) => each.status === ISeatStatus.SELECTED)
        .map((each) => each.seatNumber);

    return filteredSelectedSeats;
};
