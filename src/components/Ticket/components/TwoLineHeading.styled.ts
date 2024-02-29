import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const TwoLineHeadingWrapper = styled(Stack)(({ theme }) => ({
    h2: {
        textTransform: 'uppercase',
        fontWeight: theme.font.fontWeightRegular,
        color: theme.color.textSecondary,
        fontSize: theme.font.h3,
    },
    h3: {
        fontSize: theme.font.h2,
        fontWeight: theme.font.fontWeightBold,
    },
}));
