import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const TwoLineHeadingWrapper = styled(Stack)(({ theme }) => ({
    flex: 1,
    width: '100%',
    marginRight: '1rem',

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

    '@media screen and (max-width:728px)': {
        h2: {
            fontSize: theme.font.sm,
        },
        h3: {
            fontSize: theme.font.md,
        },
    },
}));
