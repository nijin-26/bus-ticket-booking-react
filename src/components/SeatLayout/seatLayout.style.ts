import styled from '@emotion/styled';

const SeatLayoutWrapper = styled('div')(({ theme }) => `
height: 29rem;
display: inline-flex;
gap: 1rem;
padding: 2rem 4rem 2rem 2rem;
box-sizing: border-box;
border-radius: 2rem;
background-color: ${theme.color.busLayoutBg};

.driver {
    width: 4.5rem;
    height: 4.5rem;
    margin-left: auto;
}

.line {
    height: 100%;
    width: 0;
    margin: 0 4rem;
    border: 0.1rem solid ${theme.color.bookedSeat};
    border-radius: 0.1rem;
}

.seat-row {
    display: flex;
    gap: 1rem;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;

    .seat {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 0.3rem;
        box-sizing: border-box;
        background-color: ${theme.color.seat};
        line-height: 4.5rem;
        text-align: center;
        cursor: pointer;
    }

    .booked {
        background-color: ${theme.color.bookedSeat};
        cursor: not-allowed;
    }

    .selected {
        background-color: ${theme.color.selectedSeat};
    }

    .hide-seat {
        visibility: hidden;
    }
}
`
);

export default SeatLayoutWrapper;
