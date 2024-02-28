import { LoadingButton } from '@mui/lab';
import styled from '@emotion/styled';

export const Overlay = styled('div')(({ theme }) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
    cursor: 'pointer',

    '.centered-ticket-container ': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '100%', // Use 100% width
        transform: 'translate(-50%, -50%)',
        maxWidth: '1200px',
    },
    '.close-icon': {
        position: 'absolute',
        top: '10%',
        right: '5%',
        cursor: 'pointer',
        color: theme.color.background,
    },
}));

export const Wrapper = styled('div')`
    position: relative;
    padding: 2.4rem 2.4rem 4rem 2.4rem;
`;

export const CenteredButton = styled(LoadingButton)(({ theme }) => ({
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateY(50%) translateX(-50%)',
    borderRadius: '2rem',

    '&.Mui-disabled': {
        backgroundColor: theme.color.secondary,
    },
}));
