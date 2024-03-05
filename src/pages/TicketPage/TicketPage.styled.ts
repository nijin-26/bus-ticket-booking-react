import styled from '@emotion/styled';
import Accordion from '@mui/material/Accordion';

export const TicketAccordionWrapper = styled(Accordion)(({ theme }) => ({
    marginBottom:'2rem',
    backgroundColor: theme.color.background,
    borderRadius: '0.7rem',
    boxShadow: `0 0 1rem 0 ${theme.color.boxShadowPrimary}`,
    maxWidth:'120rem',

    '.accordion-heading': {
        fontWeight: theme.font.fontWeightBold,
    },
    '.passenger-details-table-heading': {
        fontWeight: theme.font.fontWeightMedium,
    },
    '.fare-details >*': {
        color: theme.color.grey500,
    },
    '.emphasize-text': {
        color: theme.color.textPrimary,
        fontWeight: theme.font.fontWeightMedium,
    },

    '.centered-seatlayout-container': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%', // Use 100% width
        transform: 'translate(-50%, -50%)',
        maxWidth: '120rem',
    },
}));
