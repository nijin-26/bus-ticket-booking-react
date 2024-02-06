import styled from '@emotion/styled';

const SeatLayoutWrapper = styled('div')(
    ({ theme }) => `

display: flex;
padding: 2rem 4rem 2rem 2rem;
border-radius: 2rem;
background-color: ${theme.color.busLayoutBg};
position: relative;
width: 100%;
height: 100%;

.reset-icon{
    position: absolute ;
    top: -20px;
    right: 0;
    color: ${theme.color.textPrimary};
}

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

}}
`
);

export default SeatLayoutWrapper;
