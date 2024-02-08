import { LoadingButton } from '@mui/lab';
import styled from '@emotion/styled';

export const Wrapper = styled('div')`
    position: relative;
    padding: 2.4rem 2.4rem 4rem 2.4rem;
`;

export const CenteredButton = styled(LoadingButton)`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateY(50%) translateX(-50%);
    border-radius: 2rem;
`;
