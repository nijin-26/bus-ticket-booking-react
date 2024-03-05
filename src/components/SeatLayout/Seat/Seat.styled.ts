import styled from '@emotion/styled';
const SeatWrapper = styled('li')(({ theme }) => ({
    '&.seat': {
        borderRadius: '0.3rem',
        backgroundColor: theme.color.seat,
        textAlign: 'center',
    },
    '&.large-size-seat': {
        p: {
            lineHeight: '4.5rem',
        },
        width: '4.5rem',
        height: '4.5rem',
    },

    '&.mid-size-seat': {
        p: { lineHeight: '3.5rem' },
        width: '3.5rem',
        height: '3.5rem',
    },

    '&.small-size-seat': {
        p: { lineHeight: '3rem' },
        width: '3rem',
        height: '3rem',
    },

    '&.unavailable': {
        backgroundColor: theme.color.bookedSeat,
    },
    '&.selected': {
        backgroundColor: theme.color.selectedSeat,
    },
    '&.aisle': {
        visibility: 'hidden',
    },
    '&.disable-click': {
        cursor: 'not-allowed',
    },
    '&.cursor-pointer': {
        cursor: 'pointer',
    },
}));

export default SeatWrapper;
