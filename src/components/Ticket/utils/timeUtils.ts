export const formatDate = (date: Date, short: boolean = false) => {
    const timeOptions: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const dateOptions: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: '2-digit',
    };

    const formattedDateTime = date.toLocaleString(
        undefined,
        short ? dateOptions : undefined
    );

    return {
        formattedDate: short ? formattedDateTime : date.toLocaleDateString(),
        formattedTime: date.toLocaleTimeString(undefined, timeOptions),
    };
};
