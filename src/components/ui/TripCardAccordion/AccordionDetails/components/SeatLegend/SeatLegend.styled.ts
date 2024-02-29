import styled from '@emotion/styled';

const SeatLegendWrapper = styled('ul')(({ theme }) => ({
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexDirection: 'row',

    li: {
        ul: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            listStyle: 'none',
            '& .seat': {
                width: '2rem',
                height: '2rem',
                boxShadow: `0 0 0.4rem ${theme.color.boxShadowPrimary}`,
            },
        },
    },
    'li:first-of-type': {
        ul: {
            padding: 0,
        },
    },

    '.title': {
        marginLeft: '1.5rem',
    },
}));

export default SeatLegendWrapper;
