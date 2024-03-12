import styled from '@emotion/styled';
import { Stack } from '@mui/material';
import { colors } from '../../config';

export const TicketWrapper = styled(Stack)(({ theme }) => ({
    borderRadius: '2.5rem',
    backgroundColor: theme.color.cardWhite,
    minWidth: '35rem',
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    boxShadow: `0 0 1rem 0 ${theme.color.boxShadowPrimary}`,
    cursor: 'auto',
    marginTop: '2rem',

    h1: {
        fontSize: theme.font.h2,
        fontWeight: theme.font.fontWeightMedium,
    },
    '& > :first-of-type, & > :last-child': {
        padding: '2rem',
        backgroundColor: colors.deepPurple,
    },
    '&>:first-of-type': {
        color: colors.white,
        borderRadius: '2rem 2rem 0 0',
    },
    '& > :last-child': {
        padding: '1rem',
        borderRadius: '0 0 2rem 2rem',
    },
    '.details-row': {
        '& > *': {
            flex: 1,
        },
    },
    '.row-wrap': {
        flexWrap: 'wrap',
    },
    '.full-row-wrap': {
        '&>:first-of-type': {
            flex: '2',
        },
        '& > *': {
            flex: 1,
        },
    },
    '& .rotated-barcode-container': {
        marginLeft: '0',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
        padding: '1rem',

        '& >svg': {
            rotate: '270deg',
            maxHeight: '10rem',
            width: '100%',
            objectFit: 'cover', // Ensure the image covers the entire box
        },
    },
    '& .dotted-vertical-div': {
        width: '0.1rem',
        border: '0.1rem dashed',
        borderColor: theme.color.textPrimary,
        marginLeft: '3.5rem', // Adjust the margin to position the line between the two columns
    },
    '@media screen and (max-width:900px)': {
        '.barcode-row': {
            flexDirection: 'column',
            alignItems: 'center',

            '& .details-column': {
                width: '100%',
            },
        },
        '& .rotated-barcode-container >svg': {
            rotate: '0deg',
            maxWidth: '12rem',
        },

        '.tearsheet-column': {
            justifyContent: 'flex-start',
        },
    },
}));
