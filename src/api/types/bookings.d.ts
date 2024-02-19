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
