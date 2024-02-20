import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const ToggleButton = styled(IconButton)(({ theme }) => ({
    ' @keyframes toggleAnimation': {
        ' 0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(180deg)' },
    },

    ' @keyframes reverseAnimation': {
        ' 0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(-180deg)' },
    },

    '&.toggle': {
        animation: 'toggleAnimation 0.5s ease',
    },

    '&.reverse': {
        animation: 'reverseAnimation 0.5s ease',
    },
}));
