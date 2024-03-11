import { describe, it, expect } from 'vitest';
import { render, screen } from '../../../utils/testUtils/test-utils';
import user from '@testing-library/user-event';
import { ITrip, IBusType, ISeatType } from '../../../types';
import { TripCardAccordion } from './TripCardAccordion';

const mockData: ITrip = {
    id: '1',
    origin: { id: '8', name: 'Palakkad', shortCode: 'PLK' },
    destination: { id: '9', name: 'Pathanamthitta', shortCode: 'PTA' },
    departureTimestamp: new Date(2024, 5, 15, 9, 0),
    arrivalTimestamp: new Date(2024, 5, 15, 14, 0),
    busType: IBusType.AC,
    seatType: ISeatType.SLEEPER,
    totalSeats: 30,
    availableSeats: 15,
    farePerSeat: 1000,
};

describe('TripCardAccordion', () => {
    it('renders trip details', () => {
        render(<TripCardAccordion data={mockData} mode="view" />);
        expect(screen.getByText('9:00 AM')).toBeVisible();
        expect(screen.getByText('2:00 PM')).toBeVisible();
        const dateElements = screen.queryAllByText('15th Jun');
        expect(dateElements[0]).toBeVisible();
        expect(dateElements[1]).toBeVisible();
        expect(screen.getByText('5 hours')).toBeVisible();
        expect(screen.getByText('15 seats available')).toBeVisible();
        expect(screen.getByText('₹ 1000/-')).toBeVisible();
    });

    it('expands and collapse the accoridion on clicking', async () => {
        render(<TripCardAccordion data={mockData} mode="view" />);
        user.setup();
        const accordionSummary = screen.getByRole('button', {
            name: /Bus Type - AC Seat Type - Sleeper 9:00 AM 15th Jun 2:00 PM 15th Jun 5 hours 15 seats available ₹ 1000/i,
        });
        expect(accordionSummary.getAttribute('aria-expanded')).toBe('false');
        await user.click(accordionSummary);
        expect(accordionSummary.getAttribute('aria-expanded')).toBe('true');
        await user.click(accordionSummary);
        expect(accordionSummary.getAttribute('aria-expanded')).toBe('false');
    });
});
