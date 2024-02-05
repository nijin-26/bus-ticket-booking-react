import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const DetailsItemWrapper = styled(Stack)(({ theme }) => ({
    img: {
        fontSize: theme.font.md,
    },
    '.title': {
        fontSize: theme.font.lg,
        fontWeight: theme.font.fontWeightMedium,
    },
    '.value': {
        fontSize: theme.font.lg,
    },
}));
