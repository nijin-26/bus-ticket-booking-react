export interface ITicket {
    pnrNumber: string;
    tripId: string;
    seats: IPassengerSeat[];
}

export interface IPassengerSeat {
    seatNumber: number;
    passenger: IPassenger;
}

export interface IPassenger {
    fullName: string;
    age: number;
    gender: Gender;
}

export enum Gender {
    MALE = 'MALE',
    FEMALE = 'FEMALE',
}
