import styled from '@emotion/styled';
import { Alert } from '@mui/material';

export const StyledAlert = styled(Alert)(({ theme }) => ({
    backgroundColor: theme.color.secondary,
    color: theme.color.primary,
}));
