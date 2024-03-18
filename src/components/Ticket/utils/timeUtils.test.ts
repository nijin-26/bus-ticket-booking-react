import { test, expect } from 'vitest';
import { formatDate } from './timeUtils';

test('formatDate: should format date correctly', () => {
    const date = new Date('2024-05-14T21:52:56.000Z');
    const expectedResult = {
        formattedDate: '15 May',
        formattedTime: '03:22 AM',
    };
    expect(formatDate(date, true)).toEqual(expectedResult);
});
