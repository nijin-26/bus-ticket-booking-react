// {
//     "passengers": [
//       {
//         "seatNumber": 12,
//         "fullName": "asasas",
//         "age": "12",
//         "gender": "male"
//       },
//       {
//         "seatNumber": 22,
//         "fullName": "sdadsd",
//         "age": "23",
//         "gender": "male"
//       }
//     ]
//   }

// {
//     "tripId": "1",
//     "seats": [
//       {"seatNumber": 1, "passenger": {"fullName": "John Doe", "age": 25, "gender": "Male"}},
//       {"seatNumber": 2, "passenger": {"fullName": "Jane Doe", "age": 22, "gender": "Female"}}
//     ]
//   }

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
interface Iseats {
    seatNumber: number;
    passenger: Ipdetails;
}

export interface ITripDetailPayload {
    tripId: number;
    seats: Iseats;
}

export const converterFun = (obj: IPassengersInput) => {
    const passengersArray = obj.passengers;
    const convertedPassengersArray = passengersArray.map((each) => {
        {
            each.seatNumber, { ...each };
        }
    });
    return { tripId: 1, convertedPassengersArray };

    // let seats:Iseats= obj.passengers.map((eachObj):IPassengers =>{
    //     let tempObj = {eachObj.seatNumber,{...eachObj}}
    //     return {each.seatNumber,{...each}}
    // })
    // let returnObj: ITripDetailPayload={tripId:1,};
    // return returnObj;
};
