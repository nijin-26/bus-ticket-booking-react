import styled from '@emotion/styled';
import { Box, Tab } from '@mui/material';

export const AuthModalWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60rem',
    minWidth: '45rem',
    // padding: '2rem',
    backgroundColor: theme.color.background,
    borderRadius: '10px',
}));

export const StyledTab = styled(Tab)(({ theme }) => ({
    fontSize: theme.font.h2,
}));
