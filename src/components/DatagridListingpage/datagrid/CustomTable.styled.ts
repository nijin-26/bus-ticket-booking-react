import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const CustomTableWrapper = styled(Box)(({ theme }) => ({
    background: theme.color.background,
    marginTop: '0',
    width: '100%',

    '& .custom-header': {
        fontSize: theme.font.lg,

        '&:focus': {
            outline: 'none',
        },
    },

    a: {
        fontWeight: theme.font.fontWeightMedium,
        textDecoration: 'none',
        color: theme.color.linkColor,
    },

    '& .MuiDataGrid-root': {
        border: 'none',
        userSelect: 'none',
        '&:focus': {
            outline: 'none',
        },

        '& [class^=MuiDataGrid]': {
            '&:focus': {
                outline: 'none',
            },
        },
    },

    '& .MuiDataGrid-footerContainer .MuiBox-root': {
        padding: '1.6rem 0',
        flexWrap: 'wrap',
        p: { whiteSpace: 'nowrap', width: '100%' },
        nav: { width: '100%' },
        ul: { flexWrap: 'nowrap', width: 'fit-content', marginLeft: 'auto' },
    },
}));
