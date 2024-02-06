import styled from '@emotion/styled';
import Box from '@mui/material/Box';

export const BookingsTableWrapper = styled(Box)(({ theme }) => ({
    background: theme.color.background,
    marginTop: '3rem',
    width: '100%',

    '& .custom-header': {
        fontSize: theme.font.md,

        '&:focus': {
            outline: 'none',
        },
    },

    '& .MuiDataGrid-root': {
        fontSize: '1.15rem',
        border: 'none',
        userSelect: 'none',
        '&:focus': {
            outline: 'none',
        },

        '& [class^=MuiDataGrid]': {
            border: 'none',

            '&:focus': {
                outline: 'none',
            },
        },
    },
}));
