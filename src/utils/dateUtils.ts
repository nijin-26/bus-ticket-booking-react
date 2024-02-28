import { format, formatDuration, intervalToDuration } from 'date-fns';

export function convertTimeStamp(departureDate: Date, arrivalDate: Date) {
    const formattedDepartureTime = format(departureDate, 'p');
    const formattedDepartureDate = format(departureDate, 'do LLL');
    const formattedArrivalTime = format(arrivalDate, 'p');
    const formattedArrivalDate = format(arrivalDate, 'do LLL');

    const duration = intervalToDuration({
        start: departureDate,
        end: arrivalDate,
    });
    const formattedDuration = formatDuration(duration, {
        format: ['days', 'hours', 'minutes'],
    });
    return {
        formattedDepartureTime,
        formattedDepartureDate,
        formattedArrivalTime,
        formattedArrivalDate,
        formattedDuration,
    };
}