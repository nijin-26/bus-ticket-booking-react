import styled from '@emotion/styled';

const SeatLayoutWrapper = styled('div')(
    ({ theme }) => `

display: flex;
padding: 2rem 4rem 2rem 2rem;
border-radius: 2rem;
background-color: ${theme.color.busLayoutBg};

.driver-cabin{
    display: flex;
    border-right:0.3rem solid ${theme.color.bookedSeat};
    margin-right: 4rem;
    padding-right: 4rem;

    .steering {
    width: 4.5rem;
    height: 4.5rem;
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
}}
`
);

export default SeatLayoutWrapper;
