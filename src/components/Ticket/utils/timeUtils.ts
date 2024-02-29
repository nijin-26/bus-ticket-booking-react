export const formatDate = (date: Date, short: boolean = false) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const amOrPm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours =
        hours % 12 === 0 ? 12 : hours < 12 ? `0${hours}` : hours % 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

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
        formattedTime: `${formattedHours}:${formattedMinutes} ${amOrPm}`,
    };
};