import { IBooking } from '../../api/types/bookings';
import { Gender } from '../../interfaces';
import { AllBookingsPageWrapper } from './AllBookingsPage.styled';
import { BookingsTable } from './components/Table/BookingsTable';

export const AllBookingsPage = () => {
    const bookings: IBooking[] = [
        {
            pnrNumber: 'ABC123',
            tripId: 'U32BT',
            origin: 'Trivandrum',
            destination: 'Kochi',
            departureTimestamp: '2024-02-01T08:00:00Z',
            arrivalTimestamp: '2024-02-01T12:00:00Z',
            seatType: 'SLEEPER',
            busType: 'AC',
            farePerSeat: 50,
            seats: [
                {
                    seatNumber: 1,
                    passenger: {
                        fullName: 'John Doe',
                        age: 25,
                        gender: Gender.MALE,
                    },
                },
                {
                    seatNumber: 2,
                    passenger: {
                        fullName: 'Jane Doe',
                        age: 22,
                        gender: Gender.FEMALE,
                    },
                },
            ],
        },
    ];

    return (
        <AllBookingsPageWrapper>
            <BookingsTable bookings={bookings} />
        </AllBookingsPageWrapper>
    );
};
