export interface ITrip {
    id: string;
    origin: string;
    destination: string;
    departureTimestamp: string;
    arrivalTimestamp: string;
    seatType: ISeatType;
    busType: IBusType;
    farePerSeat: number;
    availableSeats: number;
    totalSeats: number;
}

export interface ITripDetailed extends ITrip {
    seats: ISeat[];
}

export interface ISeat {
    seatNumber: number;
    status: ISeatStatus;
}

export enum ISeatType {
    SLEEPER = 'SLEEPER',
    SEATER = 'SEATER',
}

export enum IBusType {
    AC = 'AC',
    NON_AC = 'NON_AC',
}

export enum ISeatStatus {
    BOOKED = 'BOOKED',
    AVAILABLE = 'AVAILABLE',
}
