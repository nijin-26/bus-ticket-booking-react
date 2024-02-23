import { Button, Toolbar } from '@mui/material';
import styled from '@emotion/styled';
import { colors } from '../../config';

export const StyledToolBar = styled(Toolbar)`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;

    .app-logo {
        margin-right: 0.5rem;
        margin-top: 0.25rem;
        font-size: 3.6rem;
    }

    .theme-button {
        margin-right: 2rem;
    }
`;

export const StyledProfileButton = styled(Button)(({ theme }) => ({
    color: colors.white,
    borderColor: colors.white,
    ':hover': {
        borderColor: theme.color.textSecondary,
    },
}));
