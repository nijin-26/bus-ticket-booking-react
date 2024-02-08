import styled from '@emotion/styled';
import Accordion from '@mui/material/Accordion';

export const TripAccordionWrapper = styled(Accordion)(({ theme }) => ({
    marginBottom: '2rem',
    backgroundColor: theme.color.background,
    borderRadius: '0.7rem',
    borderLeft: `0.8rem solid${theme.color.red}`,
    boxShadow: `0 0 1rem 0 ${theme.color.boxShadowPrimary}`,

    'trip-card-icons': {
        gap: '1rem',
    },

    p: {
        margin: 0,
        whiteSpace: 'nowrap',
        fontSize: theme.font.lg,
        alignSelf: 'center',
    },

    'p.date': {
        fontSize: theme.font.sm,
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
