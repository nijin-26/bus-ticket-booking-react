import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';

export const Wrapper = styled('div')`
    position: relative;
    padding: 24px 24px 40px 24px;
`;

export const CenteredButton = styled(LoadingButton)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(50%) translateX(-50%);
    border-radius: 20px;
`;
