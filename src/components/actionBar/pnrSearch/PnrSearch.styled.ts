import { LoadingButton } from '@mui/lab';
import styled from '@emotion/styled';

export const Overlay = styled('div')(() => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1500,
    cursor: 'pointer',

    body: {
        overflow: 'hidden',
    },

    '.centered-ticket-container ': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: 'calc(100% - 4rem)',
        transform: 'translate(-50%, -50%)',
        maxWidth: '120rem',
        display: 'flex',
        flexDirection: 'column',

        '.ticket-btn': {
            margin: '2rem',
            alignSelf:'flex-end'
        }
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
