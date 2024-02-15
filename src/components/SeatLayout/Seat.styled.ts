import styled from '@emotion/styled';
const SeatWrapper = styled('li')(({ theme }) => ({
    '&.seat': {
        width: '4.5rem',
        height: '4.5rem',
        borderRadius: '0.3rem',
        backgroundColor: theme.color.seat,
        lineHeight: '4.5rem',
        textAlign: 'center',
        cursor: 'pointer',
    },
    '&.unavailable': {
        backgroundColor: theme.color.bookedSeat,
        cursor: 'not-allowed',
    },
    '&.selected': {
        backgroundColor: theme.color.selectedSeat,
    },
    '&.aisle': {
        visibility: 'hidden',
    },
}));

export default SeatWrapper;
