import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const CheckoutWrapper = styled(Stack)(({ theme }) => ({
    transition: 'all 0.3s ease-in-out',

    '.totalAmt': {
        width: '100%',
        maxWidth: '600px',
    },
    '.rupees': {
        fontSize: theme.font.lg,
    },
    '.title': {
        fontSize: theme.font.lg,
        fontWeight: theme.font.fontWeightMedium,
    },
    '.value': {
        fontSize: theme.font.lg,
        fontWeight: theme.font.fontWeightMedium,
    },
}));
