import styled from '@emotion/styled';

const SeatLegendWrapper = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: '1rem',

    li: {
        ul: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            listStyle: 'none',
            padding: '0',
            '& .seat, & .window': {
                width: '2rem',
                height: '2rem',
                boxShadow: `0 0 0.4rem ${theme.color.boxShadowPrimary}`,
                position: 'static',
            },
        },
    },

    '.title': {
        marginLeft: '1.5rem',
    },
}));

export default SeatLegendWrapper;
