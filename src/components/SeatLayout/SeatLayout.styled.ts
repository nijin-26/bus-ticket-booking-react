import styled from '@emotion/styled';
const seatLayoutWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    padding: '2rem 4rem 2rem 2rem',
    borderRadius: '2rem',
    backgroundColor: theme.color.busLayoutBg,
    width: '100%',
    height: '100%',
    overflow: 'auto',

    '.driver-cabin': {
        display: 'flex',
        borderRight: `0.3rem solid ${theme.color.bookedSeat}`,
        marginRight: '4rem',
        paddingRight: '4rem',

        '.steering': {
            width: '4.5rem',
            height: '4.5rem',
        },
    },

    '.seats-container': {
        display: 'flex',
        flexGrow: 1,
        gap: '1rem',
        justifyContent: 'space-between',

        '.seat-row': {
            display: 'flex',
            flexDirection: 'column',
            listStyle: 'none',
            padding: 0,
            margin: 0,
            gap: '1rem',
            justifyContent: 'space-between',
        },
    },
}));
export default seatLayoutWrapper;
