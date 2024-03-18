import { Button, Toolbar } from '@mui/material';
import styled from '@emotion/styled';
import { colors } from '../../config';

export const StyledToolBar = styled(Toolbar)`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    justify-content: space-between;
    gap: 2rem;
    padding-top: 1.6rem;
    padding-bottom: 1.6rem;

    .language-icon {
        margin-right: 1;
    }
    .language-span {
        font-size: 1.2rem;
    }
`;

export const StyledButton = styled(Button)(({ theme }) => ({
    textTransform: 'none',
    color: colors.white,
    borderColor: colors.white,
    ':hover': {
        borderColor: theme.color.textSecondary,
    },
}));
