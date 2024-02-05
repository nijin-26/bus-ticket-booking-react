import styled from '@emotion/styled';

const SeatWrapper = styled('div')(
    ({ theme }) => `

    .seat {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 0.3rem;
        background-color: ${theme.color.seat};
        line-height: 4.5rem;
        text-align: center;
        cursor: pointer;
    }

    .unavailable {
        background-color: ${theme.color.bookedSeat};
        cursor: not-allowed;
    }

    .selected {
        background-color: ${theme.color.selectedSeat};
    }

    .aisle {
        visibility: hidden;
    }
`
);

export default SeatWrapper;
