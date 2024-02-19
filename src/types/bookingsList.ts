export interface IBooking {
    pnrNumber: string;
    tripId: number;
    origin: string;
    destination: string;
    departureDate: string;
    departure: string;
    arrival: string;
    durationInHours: string;
    busType: string;
    seatType: string;
    passengers: {
        seatNumber: string;
        passengerName: string;
        passengerAge: number;
        passengerGender: string;
        fare: string;
    }[];
}
