import { TripCardAccordion } from '../../components';
import { TripsListingPageWrapper } from './TripsListingPage.styled';

const dummyData = [
    {
        id: '1',
        origin: 'Trivandrum',
        destination: 'Kochi',
        departureTimestamp: '2024-02-01T08:00:00Z',
        arrivalTimestamp: '2024-02-01T12:00:00Z',
        seatType: 'SLEEPER',
        busType: 'AC',
        farePerSeat: 50,
        availableSeats: 20,
        totalSeats: 30,
    },
    {
        id: '2',
        origin: 'Trivandrum',
        destination: 'Kochi',
        departureTimestamp: '2024-02-01T08:00:00Z',
        arrivalTimestamp: '2024-02-01T12:00:00Z',
        seatType: 'SEATER',
        busType: 'AC',
        farePerSeat: 2350,
        availableSeats: 5,
        totalSeats: 30,
    },
    {
        id: '3',
        origin: 'Trivandrum',
        destination: 'Kochi',
        departureTimestamp: '2024-02-01T08:00:00Z',
        arrivalTimestamp: '2024-02-01T12:00:00Z',
        seatType: 'SLEEPER',
        busType: 'NON-AC',
        farePerSeat: 150,
        availableSeats: 0,
        totalSeats: 30,
    },
    {
        id: '4',
        origin: 'Trivandrum',
        destination: 'Kochi',
        departureTimestamp: '2024-02-01T08:00:00Z',
        arrivalTimestamp: '2024-02-03T12:10:20Z',
        seatType: 'SEATER',
        busType: 'AC',
        farePerSeat: 23150,
        availableSeats: 2,
        totalSeats: 30,
    },
    {
        id: '5',
        origin: 'Trivandrum',
        destination: 'Kochi',
        departureTimestamp: '2024-02-01T08:00:00Z',
        arrivalTimestamp: '2024-02-01T12:00:00Z',
        seatType: 'SLEEPER',
        busType: 'AC',
        farePerSeat: 150,
        availableSeats: 23,
        totalSeats: 30,
    },
];
export const TripsListingPage = () => {
    return (
        <TripsListingPageWrapper>
            <h1>TripsListingPage</h1>
            {dummyData.map((indData) => (
                <TripCardAccordion key={indData.id} data={indData} />
            ))}
        </TripsListingPageWrapper>
    );
};
