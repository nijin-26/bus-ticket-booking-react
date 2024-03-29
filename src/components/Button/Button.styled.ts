import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { colors } from '../../config/constants';

export const StyledButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.color.red,
    color: colors.white,

    '&:hover': {
        backgroundColor: theme.color.redHover,
        opacity: 1,
    },

    '&:active': {
        backgroundColor: theme.color.red,
    },
}));
