import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../utils/testUtils/test-utils';
import {
    IBusType,
    ISeatType,
    ITicket,
    ITicketStatus,
    IGender,
} from '../../../types';
import { Ticket } from '../Ticket';

const mockData: ITicket = {
    pnrNumber: '20bs9s',
    trip: {
        id: '2',
        origin: {
            id: '1',
            name: 'KochI',
            shortCode: 'COK',
        },
        destination: {
            id: '2',
            name: 'Trivandrum',
            shortCode: 'TRV',
        },
        departureTimestamp: new Date(2024, 3, 1, 23, 22),
        arrivalTimestamp: new Date(2024, 3, 2, 3, 22),
        farePerSeat: 1000,
        totalSeats: 46,
        busType: IBusType.AC,
        seatType: ISeatType.SEATER,
        availableSeats: 36,
    },
    status: ITicketStatus.CONFIRMED,
    seats: [
        {
            seatNumber: 14,
            passenger: {
                fullName: 'Adam',
                age: 30,
                gender: IGender.MALE,
            },
        },
        {
            seatNumber: 15,
            passenger: {
                fullName: 'Mary',
                age: 3,
                gender: IGender.FEMALE,
            },
        },
        {
            seatNumber: 16,
            passenger: {
                fullName: 'Eva',
                age: 29,
                gender: IGender.FEMALE,
            },
        },
    ],
};

describe('Ticket', () => {
    it('renders trip details', () => {
        render(<Ticket data={mockData} />);
        const passengerNameElements = screen.getAllByText('Adam');

        passengerNameElements.forEach((element) => {
            expect(element).toBeVisible();
        });

        expect(screen.getByText('KochI - COK')).toBeVisible();
        expect(screen.getByText('COK')).toBeVisible();
        expect(screen.getByText('11:22 PM')).toBeVisible();
        expect(screen.getByText('1 Mar 11:22 PM')).toBeVisible();

        expect(screen.getByText('Trivandrum - TRV')).toBeVisible();
        expect(screen.getByText('TRV')).toBeVisible();
        expect(screen.getByText('03:22 AM')).toBeVisible();
        expect(screen.getByText('2 Mar 03:22 AM')).toBeVisible();

        expect(screen.getByText('20BS9S')).toBeVisible();

        expect(screen.getByText('2 adults and 1 child')).toBeVisible();
        expect(screen.getByText('14, 15, 16')).toBeVisible();
    });
});
