import { ISeat, ISeatStatus } from '../types';
import { IGender, IPassengerSeat } from '../types';

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

//input
// {
//     "passengers": [
//       {
//         "seatNumber": 1,
//         "fullName": "dfadf",
//         "age": "23",
//         "gender": "female"
//       }
//     ]
//   }

//output
// [
//     {
//         seatNumber:23,
//         passenger:{
//             fullName:"assdg",
//             age:12,
//             gender:IGender.MALE
//         }
//     }
// ]

export const conv = (obj: IPassengersInput): IPassengerSeat[] => {
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

// export function convertDataToPassengerSeats(
//     data: IPassengersInput
// ): IPassengerSeat[] {
//     return data.passengers.map((passenger) => ({
//         seatNumber: passenger.seatNumber,
//         passenger: {
//             fullName: passenger.fullName,
//             age: passenger.age,
//             gender: IGender[passenger.gender.toUpperCase()], // Map to the IGender enum
//         },
//     }));
// }

export const filterSelectedSeats = (arr: ISeat[]) => {
    const filteredSelectedSeats: number[] = arr
        .filter((each) => each.status === ISeatStatus.SELECTED)
        .map((each) => each.seatNumber);

    return filteredSelectedSeats;
};
