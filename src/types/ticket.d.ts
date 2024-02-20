export interface ITicket {
    pnrNumber: string;
    trip: ITripTicket;
    seats: IPassengerSeat[];
}

export interface IPassengerSeat {
    seatNumber: number;
    passenger: IPassenger;
}

export interface IPassenger {
    fullName: string;
    age: number;
    gender: IGender;
}

export enum IGender {
    MALE = 'male',
    FEMALE = 'female',
}

export interface ITripTicket {
    id: string;
    originId: string;
    destinationId: string;
    departureTimestamp: Date;
    arrivalTimestamp: Date;
    seatType: ISeatType;
    busType: IBusType;
    farePerSeat: number;
    availableSeats: number;
    totalSeats: number;
}
