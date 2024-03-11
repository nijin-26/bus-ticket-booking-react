import { format, formatDuration, intervalToDuration } from 'date-fns';

export const convertTimeStamp = (
    departureDate: Date,
    arrivalDate: Date
): {
    formattedDepartureTime: string;
    formattedDepartureDate: string;
    formattedArrivalTime: string;
    formattedArrivalDate: string;
    formattedDuration: string;
} => {
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
};

export const getDateFromTimestamp = (
    date: Date,
    dateFormat?: string,
    timeFormat?: string
) => {
    return {
        formattedDate: format(date, dateFormat || 'dd-MMM-yyyy'),
        formattedTime: format(date, timeFormat || 'hh:mm a'),
    };
};
