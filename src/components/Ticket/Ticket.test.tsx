import { describe, it, expect } from 'vitest';
import { render, screen } from '../../utils';
import { Ticket } from '..';
import {
    IBusType,
    IGender,
    ISeatType,
    ITicket,
    ITicketStatus,
} from '../../types';

const mockData: ITicket = {
    pnrNumber: '101opf',
    trip: {
        id: '101',
        origin: {
            id: '8',
            name: 'Palakkad',
            shortCode: 'PLK',
        },
        destination: {
            id: '9',
            name: 'Pathanamthitta',
            shortCode: 'PTA',
        },
        departureTimestamp: new Date('2024-05-14T17:52:56.000Z'),
        arrivalTimestamp: new Date('2024-05-14T21:52:56.000Z'),
        farePerSeat: 1200,
        totalSeats: 46,
        busType: IBusType.NON_AC,
        seatType: ISeatType.SLEEPER,
        availableSeats: 42,
    },
    status: ITicketStatus.CONFIRMED,
    seats: [
        {
            seatNumber: 31,
            passenger: {
                fullName: 'John Doe',
                age: 123,
                gender: IGender.MALE,
            },
        },
        {
            seatNumber: 32,
            passenger: {
                fullName: 'Johnny Doe',
                age: 123,
                gender: IGender.FEMALE,
            },
        },
    ],
};

describe('Ticket', () => {
    it('renders ticket details', () => {
        render(<Ticket data={mockData} />);
        expect(screen.getByText('TICKET')).toBeVisible();
        const name = screen.getAllByText('John Doe');
        expect(name[0]).toBeVisible();
        expect(name[1]).toBeVisible();
        expect(screen.getByText('Palakkad - PLK')).toBeVisible();
        expect(screen.getByText('Pathanamthitta - PTA')).toBeVisible();
        expect(screen.getByText('101OPF')).toBeVisible();
        expect(screen.getByText('2 adults')).toBeVisible();
        expect(screen.getByText('11:22 PM')).toBeVisible();
        expect(screen.getByText('03:22 AM')).toBeVisible();
        const seats = screen.getAllByText('31, 32');
        expect(seats[0]).toBeVisible();
        expect(seats[1]).toBeVisible();
    });
});
