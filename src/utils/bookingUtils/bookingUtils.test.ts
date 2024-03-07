import { describe, expect, it } from 'vitest';
import { convertFormikDataToApiData, filterSelectedSeats } from '..';
import { ISeatStatus } from '../../types';

describe('Booking API converter function', () => {
    it('converts formik data to API payload', () => {
        const input = {
            passengers: [
                {
                    seatNumber: 40,
                    fullName: 'Rishi',
                    age: '23',
                    gender: 'male',
                },
            ],
        };
        const output = [
            {
                seatNumber: 40,
                passenger: {
                    fullName: 'Rishi',
                    age: 23,
                    gender: 'male',
                },
            },
        ];

        expect(convertFormikDataToApiData(input)).toStrictEqual(output);
    });
});

describe('Seat filter function for booking', () => {
    it('filter selected seats', () => {
        const input = [
            {
                seatNumber: 40,
                status: ISeatStatus.BOOKED,
            },
            {
                seatNumber: 41,
                status: ISeatStatus.SELECTED,
            },
        ];

        const output = [41];

        expect(filterSelectedSeats(input)).toStrictEqual(output);
    });

    it('filter selected seats', () => {
        const input = [
            {
                seatNumber: 40,
                status: ISeatStatus.BOOKED,
            },
        ];

        const output: number[] = [];

        expect(filterSelectedSeats(input)).toStrictEqual(output);
    });
});
