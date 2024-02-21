import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const DatagridListingPageWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    margin: '3rem 0',

    '& .box-bg': {
        backgroundColor: theme.color.busLayoutBg,
    },

    '& .boxes': {
        height: '10rem',
        flex: '1',

        '& .box-col': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        },
        '& .title': {
            color: theme.color.textPrimary,
            fontSize: theme.font.md,
        },
        '& .value': {
            fontWeight: '700',
            fontSize: theme.font.h1,
            color: theme.color.primary,
        },
    },
}));
