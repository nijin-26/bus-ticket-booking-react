import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const TripCardDetailsLoaderWrapper = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    margin: '0 -5%',
    overflow: 'hidden',


    '.dot-flashing': {
        position: 'relative',
        width: '1rem',
        height: '1rem',
        borderRadius: '0.5rem',
        backgroundColor: '#9880ff',
        color: '#9880ff',
        animation: 'dot-flashing 2s infinite linear alternate',
        animationDelay: '1s',
        '&::before, &::after': {
            content: '""',
            display: 'inline-block',
            position: 'absolute',
            top: 0,
        },
        '&::before': {
            left: '-1.5rem',
            width: '1rem',
            height: '1rem',
            borderRadius: '0.5rem',
            backgroundColor: '#9880ff',
            color: '#9880ff',
            animation: 'dot-flashing 10s infinite alternate',
            animationDelay: '0s',
        },
        '&::after': {
            left: '1.5rem',
            width: '1rem',
            height: '1rem',
            borderRadius: '0.5rem',
            backgroundColor: '#9880ff',
            color: '#9880ff',
            animation: 'dot-flashing 2s infinite alternate',
            animationDelay: '2s',
        },
    },
    '@keyframes dot-flashing': {
        '0%': {
            backgroundColor: '#9880ff',
        },
        '50%, 100%': {
            backgroundColor: 'rgba(152, 128, 255, 0.2)',
        },
    },
}));
