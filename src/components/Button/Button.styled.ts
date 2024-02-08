import styled from '@emotion/styled';
import { Button } from '@mui/material';

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.color.red,
    color: theme.color.textPrimary,
    width: '100%',

    '&:hover': {
        backgroundColor: theme.color.redHover,
        opacity: 1,
    },

    '&:active': {
        backgroundColor: theme.color.red,
    },
}));
