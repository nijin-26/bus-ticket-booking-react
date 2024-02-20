import { format, formatDuration, intervalToDuration } from 'date-fns';

export function convertTimeStamp(
    departureDate?: Date,
    arrivalDate?: Date
): {
    formattedDepartureTime?: string;
    formattedDepartureDate?: string;
    formattedArrivalTime?: string;
    formattedArrivalDate?: string;
    formattedDuration?: string;
} {
    let result = {};
    if (departureDate) {
        result = {
            ...result,
            formattedDepartureTime: format(departureDate, 'p'),
            formattedDepartureDate: format(departureDate, 'do LLL'),
        };
    }
    if (arrivalDate) {
        result = {
            ...result,
            formattedArrivalTime: format(arrivalDate, 'p'),
            formattedArrivalDate: format(arrivalDate, 'do LLL'),
        };
    }
    if (arrivalDate && departureDate) {
        const duration = intervalToDuration({
            start: departureDate,
            end: arrivalDate,
        });

        const formattedDuration = formatDuration(duration, {
            format: ['days', 'hours', 'minutes'],
        });
        result = { ...result, formattedDuration };
    }
    return result;
}
