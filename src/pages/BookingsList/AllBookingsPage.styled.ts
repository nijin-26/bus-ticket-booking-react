import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const ListingPageWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    padding: '1rem',
    margin: '1rem',

    '& .boxes': {
        height: '100px',
        marginTop: '1rem',
        flex: '1',
        backgroundColor:theme.color.busLayoutBg,

        '& .box-col': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'center',
            alignItems: 'center',
            height:'100%'
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
