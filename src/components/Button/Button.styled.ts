import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.color.red, 
    width: '100%',
    
    ':not(:disabled)': {
        maxWidth: '400px',
    },
    '&:hover': {
        backgroundColor: theme.color.red, 
    },

    '&:active': {
        backgroundColor: theme.color.red,
    },
}));
