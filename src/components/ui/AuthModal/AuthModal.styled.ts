import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const AuthModalWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70rem',
    minWidth: '45rem',
    padding: '2rem',
    backgroundColor: theme.color.background,
    borderRadius: '10px',
}));
