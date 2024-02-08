export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}

export interface IPassenger {
    fullName: string;
    age: number;
    gender: Gender;
}

export interface IPassengerSeat {
    seatNumber: number;
    passenger: IPassenger;
}

export interface IBookingsList {
    count: number;
    data: IBooking[];
}

export interface IBooking {
    pnrNumber: string;
    tripId: string;
    origin: string;
    destination: string;
    departureTimestamp: string;
    arrivalTimestamp: string;
    seatType: string;
    busType: string;
    farePerSeat: number;
    seats: IPassengerSeat[];
}
