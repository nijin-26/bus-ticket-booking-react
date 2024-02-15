import { setTripListingData } from '../../app/features/tripListingSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TripCardAccordion } from '../../components';
import LoadMore from '../../components/loadMore/LoadMore';
import { ISeatType, IBusType, ITrip } from '../../types';
import { TripsListingPageWrapper } from './TripsListingPage.styled';

// const dummyData = [
//     {
//         id: '1',
//         origin: 'Trivandrum',
//         destination: 'Kochi',
//         departureTimestamp: '2024-02-01T08:00:00Z',
//         arrivalTimestamp: '2024-02-01T12:00:00Z',
//         seatType: ISeatType.SLEEPER,
//         busType: IBusType.AC,
//         farePerSeat: 50,
//         availableSeats: 20,
//         totalSeats: 30,
//     },
//     {
//         id: '2',
//         origin: 'Trivandrum',
//         destination: 'Kochi',
//         departureTimestamp: '2024-02-01T08:00:00Z',
//         arrivalTimestamp: '2024-02-01T12:00:00Z',
//         seatType: ISeatType.SEATER,
//         busType: IBusType.AC,
//         farePerSeat: 2350,
//         availableSeats: 5,
//         totalSeats: 30,
//     },
//     {
//         id: '3',
//         origin: 'Trivandrum',
//         destination: 'Kochi',
//         departureTimestamp: '2024-02-01T08:00:00Z',
//         arrivalTimestamp: '2024-02-01T12:00:00Z',
//         seatType: ISeatType.SLEEPER,
//         busType: IBusType.NON_AC,
//         farePerSeat: 150,
//         availableSeats: 0,
//         totalSeats: 30,
//     },
//     {
//         id: '4',
//         origin: 'Trivandrum',
//         destination: 'Kochi',
//         departureTimestamp: '2024-02-01T08:00:00Z',
//         arrivalTimestamp: '2024-02-03T12:10:20Z',
//         seatType: ISeatType.SEATER,
//         busType: IBusType.AC,
//         farePerSeat: 23150,
//         availableSeats: 2,
//         totalSeats: 30,
//     },
//     {
//         id: '5',
//         origin: 'Trivandrum',
//         destination: 'Kochi',
//         departureTimestamp: '2024-02-01T08:00:00Z',
//         arrivalTimestamp: '2024-02-01T12:00:00Z',
//         seatType: ISeatType.SLEEPER,
//         busType: IBusType.AC,
//         farePerSeat: 150,
//         availableSeats: 23,
//         totalSeats: 30,
//     },
// ];

const dummyData: ITrip[] = [
    {
        id: '1',
        origin: {
            id: '1',
            name: 'Trivandrum',
            shortCode: 'TVM',
        },
        destination: {
            id: '2',
            name: 'Kochi',
            shortCode: 'KCH',
        },
        departureTimestamp: new Date('2024-02-01T08:00:00Z'),
        arrivalTimestamp: new Date('2024-02-01T12:00:00Z'),
        seatType: ISeatType.SLEEPER,
        busType: IBusType.AC,
        farePerSeat: 50,
        availableSeats: 20,
        totalSeats: 46,
    },
    {
        id: '2',
        origin: {
            id: '1',
            name: 'Trivandrum',
            shortCode: 'TVM',
        },
        destination: {
            id: '2',
            name: 'Kochi',
            shortCode: 'KCH',
        },
        departureTimestamp: new Date('2024-02-01T08:00:00Z'),
        arrivalTimestamp: new Date('2024-02-01T12:00:00Z'),
        seatType: ISeatType.SEATER,
        busType: IBusType.AC,
        farePerSeat: 2350,
        availableSeats: 5,
        totalSeats: 46,
    },
    {
        id: '3',
        origin: {
            id: '1',
            name: 'Trivandrum',
            shortCode: 'TVM',
        },
        destination: {
            id: '2',
            name: 'Kochi',
            shortCode: 'KCH',
        },
        departureTimestamp: new Date('2024-02-01T08:00:00Z'),
        arrivalTimestamp: new Date('2024-02-01T12:00:00Z'),
        seatType: ISeatType.SLEEPER,
        busType: IBusType.NON_AC,
        farePerSeat: 150,
        availableSeats: 0,
        totalSeats: 46,
    },
    {
        id: '4',
        origin: {
            id: '1',
            name: 'Trivandrum',
            shortCode: 'TVM',
        },
        destination: {
            id: '2',
            name: 'Kochi',
            shortCode: 'KCH',
        },
        departureTimestamp: new Date('2024-02-01T08:00:00Z'),
        arrivalTimestamp: new Date('2024-02-03T12:10:20Z'),
        seatType: ISeatType.SEATER,
        busType: IBusType.AC,
        farePerSeat: 23150,
        availableSeats: 2,
        totalSeats: 46,
    },
];
export const TripsListingPage = () => {
    const state = useAppSelector((state) => state.tripListing);
    const dispatch = useAppDispatch();
    dispatch(setTripListingData(dummyData));

    return (
        <TripsListingPageWrapper>
            <h1>TripsListingPage</h1>
            {state.map((indData) => (
                <TripCardAccordion key={indData.id} data={indData} />
            ))}
            <LoadMore />
        </TripsListingPageWrapper>
    );
};
