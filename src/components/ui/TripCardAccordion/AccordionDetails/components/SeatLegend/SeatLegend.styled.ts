import styled from '@emotion/styled';

const SeatLegendWrapper = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap:'3rem',

    li: {
        ul: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            listStyle: 'none',
            padding:'0',
            '& .seat': {
                width: '2rem',
                height: '2rem',
                boxShadow: `0 0 4px ${theme.color.boxShadowPrimary}`,
            },
        },
    },

    '.title': {
        marginLeft: '15px',
    },
}));

export default SeatLegendWrapper;
