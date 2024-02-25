import styled from '@emotion/styled';
import { Stack } from '@mui/material';

export const TicketWrapper = styled(Stack)(({ theme }) => ({
    borderRadius: '25px',
    backgroundColor: theme.color.cardWhite,
    minWidth: 450,
    flexDirection: 'column',
    justifyContent: 'space-between',
    position: 'relative',
    margin:'20px',
    boxShadow:
        '0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)',

    h1: {
        fontSize: theme.font.h2,
        fontWeight: theme.font.fontWeightMedium,
    },
    '& > :first-child, & > :last-child': {
        padding: '20px',
        backgroundColor: theme.color.primary,
    },
    '&>:first-child': {
        color: theme.color.background,
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
    },
    '& .rotated-barcode-container': {
        marginLeft: '0',
        display: 'flex',
        alignItems: 'center',
        backgroundColor:'transparent',
        
        '& >svg': {
            rotate: '270deg',
            maxHeight: '10rem',
            width: '100%',
            objectFit: 'cover', // Ensure the image covers the entire box
        },
    },
    '& .rotated-barcode-container.small-screen': {
        '& > svg': {
          rotate: '0deg', // Keep the original angle on small screens
        },
      },      
    '& .dotted-vertical-div': {
        width: '1px', // Set width to create a vertical line
        border: '1px dashed black',
        borderRadius: '5px',
        marginLeft: '35px', // Adjust the margin to position the line between the two columns
    },

}));
