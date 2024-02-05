import styled from '@emotion/styled';
import { Chip, FormControlLabel } from '@mui/material';

export const Wrapper = styled('div')`
    padding: 40px 0 0 0;
`;

export const StyledFormControlLabel = styled(FormControlLabel)`
    padding: 0 20px;
`;

export const FixedChip = styled(Chip)`
    display: flex;
    justify-content: space-around;
    width: 100px;
`;
