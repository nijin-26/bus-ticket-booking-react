import styled from '@emotion/styled';
const SeatWrapper = styled('li')(({ theme }) => ({
    '&.seat': {
        width: '4.5rem',
        height: '4.5rem',
        borderRadius: '0.3rem',
        backgroundColor: theme.color.seat,
        lineHeight: '4.5rem',
        textAlign: 'center',
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
