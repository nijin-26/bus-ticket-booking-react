import { test, expect } from 'vitest';
import { convertTimeStamp } from '..';

test('convertTimeStamp:- date should format correctly', () => {
    const departureDate = new Date(2024, 2, 27, 10, 30);
    const arrivalDate = new Date(2024, 2, 27, 14, 15);
    const result = convertTimeStamp(departureDate, arrivalDate);

    expect(result).toEqual({
        formattedDepartureTime: '10:30 AM',
        formattedDepartureDate: '27th Mar',
        formattedArrivalTime: '2:15 PM',
        formattedArrivalDate: '27th Mar',
        formattedDuration: '3 hours 45 minutes',
    });
});
