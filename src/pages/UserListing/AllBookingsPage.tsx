import { ITicket, Gender } from '../../interfaces/';
import { AllBookingsPageWrapper } from './AllBookingsPage.styled';
import { BookingsTable } from './components/Table/BookingsTable';

export const AllBookingsPage = () => {
    const bookings: ITicket[] = [
        {
            pnrNumber: '100',
            tripId: '1',
            seats: [
                {
                    passenger: {
                        fullName: 'John Doe',
                        gender: Gender.MALE,
                        age: 25,
                    },
                    seatNumber: 1,
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
