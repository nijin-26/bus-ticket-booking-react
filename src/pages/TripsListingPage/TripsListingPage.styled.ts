import styled from '@emotion/styled';

export const TripsListingPageWrapper = styled('section')(({ theme }) => ({
    '.accordions': {
        marginBottom: '5rem',
    },

    '.no-data': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',

        p: {
            margin: '0 0 2rem',
            color: theme.color.textSecondary,
            fontSize: theme.font.md,
        },

        img: {
            width: '40rem',
        },
    },
}));
