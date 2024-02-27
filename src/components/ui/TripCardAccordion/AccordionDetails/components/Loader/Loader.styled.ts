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
        width: '10px',
        height: '10px',
        borderRadius: '5px',
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
            left: '-15px',
            width: '10px',
            height: '10px',
            borderRadius: '5px',
            backgroundColor: '#9880ff',
            color: '#9880ff',
            animation: 'dot-flashing 10s infinite alternate',
            animationDelay: '0s',
        },
        '&::after': {
            left: '15px',
            width: '10px',
            height: '10px',
            borderRadius: '5px',
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
