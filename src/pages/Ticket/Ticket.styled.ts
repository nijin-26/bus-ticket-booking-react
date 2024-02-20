import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const TicketWrapper = styled(Stack)(({ theme }) => ({
    borderRadius: '25px',
    backgroundColor: theme.color.cardWhite,
    minWidth: 450,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginTop: '40px',
    position: 'relative',
    boxShadow:
        'box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)',

    h1: {
        fontSize: theme.font.h2,
        fontWeight: theme.font.fontWeightMedium,
    },
    '& > :first-child, & > :last-child': {
        padding: '10px',
        backgroundColor: theme.color.primary,
    },
    '&>:first-child': {
        color: theme.color.background,
        padding: '10px',
        borderRadius: '15px 15px 0 0', // Apply the same borderRadius as the parent
    },
    '& > :last-child': {
        padding: '10px',
        borderRadius: '0 0 15px 15px', // Apply the same borderRadius as the parent
    },
    '.details-row': {
        '& > *': {
            flex: 1,
        },
        '& > :first-child': {
            flex: 2,
        },
    },
    '.details1-row': {
        '& > *': {
            flex: 1,
        },
        '& > :first-child': {
            flex: 2,
        },
    },
    '& .rotated-barcode-container': {
        marginLeft: '0',
        display: 'flex',
        alignItems: 'center',

        '& >svg': {
            rotate: '270deg',
            // maxHeight: '10rem',
            width: '100%',
            objectFit: 'cover', // Ensure the image covers the entire box
        },
    },
    '& .dotted-vertical-div': {
        width: '1px', // Set width to create a vertical line
        border: '1px dashed black',
        borderRadius: '5px',
        marginLeft: '35px', // Adjust the margin to position the line between the two columns
    },
    '& .top-half-circle': {
        position: 'absolute',
        height: '30px',
        width: '30px',
        top: '-15px',
        left: '70%',
        backgroundColor: theme.color.background,
        borderRadius: '100% 100%',
    },
    '& .bottom-half-circle': {
        position: 'absolute',
        height: '30px',
        width: '30px',
        top: '95%',
        left: '70%',
        backgroundColor: theme.color.background,
        borderRadius: '100% 100%',
    },
}));
