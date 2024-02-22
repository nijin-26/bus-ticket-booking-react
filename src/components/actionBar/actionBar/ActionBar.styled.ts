import styled from '@emotion/styled';
import { IconButton } from '@mui/material';

export const ToggleButton = styled(IconButton)`
    transition: transform 0.5s ease;

    &.toggle {
        transform: rotate(0);
    }

    &.reverse {
        transform: rotate(-180deg);
    }
`;
