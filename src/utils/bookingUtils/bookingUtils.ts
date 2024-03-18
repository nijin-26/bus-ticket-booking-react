import { ISeat, ISeatStatus } from '../../types';
import { IGender, IPassengerSeat } from '../../types';

interface IPassengerDetails {
    fullName: string;
    age: string;
    gender: string;
}
interface IPassengers extends IPassengerDetails {
    seatNumber: number;
}
export interface IPassengersInputFromFormik {
    passengers: IPassengers[];
}

export const convertFormikDataToApiData = (
    obj: IPassengersInputFromFormik
): IPassengerSeat[] => {
    return obj.passengers.map((each) => ({
        seatNumber: each.seatNumber,
        passenger: {
            fullName: each.fullName,
            age: Number(each.age),
            gender:
                each.gender.toUpperCase() === 'MALE'
                    ? IGender.MALE
                    : IGender.FEMALE,
        },
    }));
};

export const filterSelectedSeats = (arr: ISeat[]) => {
    const filteredSelectedSeats: number[] = arr
        .filter((each) => each.status === ISeatStatus.SELECTED)
        .map((each) => each.seatNumber);

    return filteredSelectedSeats;
};
