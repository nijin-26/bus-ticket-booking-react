import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { colors } from '../../../../../../config/constants';

export const DetailsItemWrapper = styled(Stack)(({ theme }) => ({
    img: {
        fontSize: theme.font.md,
        color: colors.white
    },
    '.title': {
        fontSize: theme.font.lg,
        fontWeight: theme.font.fontWeightMedium,
    },
    '.value': {
        fontSize: theme.font.lg,
    },
}));
