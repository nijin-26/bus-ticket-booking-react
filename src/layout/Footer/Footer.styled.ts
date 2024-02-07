import { Toolbar } from '@mui/material';
import styled from '@emotion/styled';

export const StyledToolBar = styled(Toolbar)`
    width: 100%;
    max-width: 120rem;
    margin: 0 auto;
    justify-content: space-between;

    .language-icon {
        margin-right: 1;
    }
    .language-span {
        font-size: 1.2rem;
    }
`;
