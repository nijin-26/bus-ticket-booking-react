import styled from '@emotion/styled';
import Accordion from '@mui/material/Accordion';

export const TripAccordionWrapper = styled(Accordion)(({ theme }) => ({
    marginBottom: '2rem',
    backgroundColor: theme.color.background,
    borderRadius: '0.7rem',
    borderLeft: `0.8rem solid${theme.color.red}`,
    boxShadow: `0 0 1rem 0 ${theme.color.boxShadowPrimary}`,

    '.details': {
        width: '100%',
        justifyContent: 'space-between',
        paddingRight: '2rem',
        alignItems: 'center',
    },

    '&.more-seats': {
        borderLeft: `0.8rem solid ${theme.color.green}`,
    },

    '&.less-seats': {
        borderLeft: `0.8rem solid${theme.color.red}`,
    },

    '&.no-seats': {
        borderLeft: `0.8rem solid${theme.color.textSecondary}`,
    },

    '.trip-card-icons': {
        gap: '0.5rem',
    },

    p: {
        margin: 0,
        whiteSpace: 'nowrap',
        fontSize: theme.font.lg,
        alignSelf: 'center',
    },

    'p.date': {
        fontSize: theme.font.sm,
        color: theme.color.textSecondary,
    },

    '.seats': {
        minWidth: '13rem',
    },

    'p.more-seats': {
        color: theme.color.green,
    },

    'p.less-seats': {
        color: theme.color.red,
    },

    '.date-time-parent': {
        alignItems: 'center',
    },

    '.date-time': {
        gap: '0.4rem',
    },

    '.duration': {
        width: '15rem',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
    },

    '.price': {
        minWidth: '9rem',
    },
}));

