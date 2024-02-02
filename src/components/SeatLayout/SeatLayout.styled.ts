import styled from '@emotion/styled';

const SeatLayoutWrapper = styled('div')(
    ({ theme }) => `

display: flex;
padding: 2rem 4rem 2rem 2rem;
border-radius: 2rem;
background-color: ${theme.color.busLayoutBg};


.driver-cabin{
    display: flex;
    
    .steering {
    width: 4.5rem;
    height: 4.5rem;
}

.line {
    height: 100%;
    width: 0;
    margin: 0 4rem;
    border: 0.1rem solid ${theme.color.bookedSeat};
    border-radius: 0.1rem;
}
}
.seats-container{
    display:flex;
    flex-grow: 1;
    gap: 1rem;
    justify-content: space-between;
    
    .seat-row {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding: 0;
    margin: 0;
    gap: 1rem;
    justify-content: space-between;

    .seat {
        width: 4.5rem;
        height: 4.5rem;
        border-radius: 0.3rem;
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
}}
`
);

export default SeatLayoutWrapper;
