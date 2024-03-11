import styled from '@emotion/styled';
import { AccordionDetails } from '@mui/material';

export const TripCardDetailsWrapper = styled(AccordionDetails)(({ theme }) => ({
    '& .checkout-section': {
        transition: 'all 0.3s ease-in-out',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        width: '100%',
        marginTop: '3rem',

        button: {
            textTransform: 'none',
            '@media screen and (min-width:600px)': {
                marginLeft: 'auto',
            },
        },
    },

    '& .title': {
        fontSize: theme.font.md,
        fontWeight: theme.font.fontWeightMedium,
        paddingLeft: 0,
        minWidth:'100px',
    },
    '& .value': {
        fontSize: theme.font.md,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        textAlign: 'center',
    },
    '& .title-container': {
        svg: {
            path: {
                fill: theme.color.textPrimary,
            },
        },
    },
}));
