import styled from '@emotion/styled';

export const TripCardStyled = styled('section')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    backgroundColor: `${theme.color.background}`, // Placeholder for dynamic theme value

    'trip-card-icons': {
        gap: '1rem',
    },

    '.summary': {
        borderRadius: '0.7rem',
        borderLeft: `0.8rem solid${theme.color.red}`, // Placeholder for dynamic theme value
        boxShadow: '0 0 1rem 0 rgba(0,0,0,0.26)',
    },

    p: {
        margin: 0,
        whiteSpace: 'nowrap',
        fontSize: '', // Placeholder for dynamic theme value
        alignSelf: 'center',
    },

    'p.date': {
        fontSize: '', // Placeholder for dynamic theme value
    },

    '.date-time': {
        gap: '0.4rem',
    },

    '.details': {
        width: '100%',
        justifyContent: 'space-between',
        paddingRight: '7rem',
        alignItems: 'center',
    },
}));
