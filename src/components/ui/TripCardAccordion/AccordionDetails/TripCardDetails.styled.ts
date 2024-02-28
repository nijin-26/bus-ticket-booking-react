import styled from '@emotion/styled';
import { AccordionDetails } from '@mui/material';

export const TripCardDetailsWrapper = styled(AccordionDetails)(({ theme }) => ({
    '& .checkout-section': {
        transition: 'all 0.3s ease-in-out',
    },

    '& .title': {
        fontSize: theme.font.lg,
        fontWeight: theme.font.fontWeightMedium,
        paddingLeft:0
    },
    '& .value': {
        fontSize: theme.font.lg,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
    },
    '& .title-container': {
        svg: {
            path: {
                fill: theme.color.textPrimary,
            },
        },
    },
}));
