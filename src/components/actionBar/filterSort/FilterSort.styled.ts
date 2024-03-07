import styled from '@emotion/styled';
import { Chip, FormControlLabel } from '@mui/material';

export const Wrapper = styled('div')`
    padding: 4rem 0 0 0;
    width: 100%;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
    padding: 0 2rem;
`;

export const FixedChip = styled(Chip)`
    display: flex;
    justify-content: space-around;
    width: 10rem;
`;
