import styled from '@emotion/styled';

export const TicketWrapper = styled('div')(({ theme }) => ({
    backgroundColor: theme.color.cardWhite,
    borderRadius: '2.5rem',
    border: '1px solid black',
    width: '100%', // Set width to make it responsive

    '& > div': {
        // border: '1px solid black',

        '& > img': {
            border: '1px solid black',
        },
        '& .dotted-vertical-div': {
            width: '1px', // Set width to create a vertical line
            border: '1px dashed black',
            borderRadius: '5px',
            marginLeft: '35px', // Adjust the margin to position the line between the two columns
        },
        '& .dotted-div': {
            position: 'relative',
            height: '1px',
            width: '100%',
            border: '1px dashed',
            borderColor: theme.color.textSecondary,
            borderRadius: '5px',
            marginTop: '35px',
        },
        '& .app-logo': {
            position: 'absolute',
            top: '-15px', // Adjust the position to place it on top of the dotted line
            left: '50%', // Center the icon horizontally
            transform: 'translateX(-50%)', // Adjust to center the icon exactly above the line
            background: theme.color.cardWhite,
        },
        '& .location-short-name': {
            fontSize: '5rem',
            fontWeight: theme.font.fontWeightBold,
            color: theme.color.primary,
        },
        '& .location-full-name': {
            fontSize: '2rem',
            fontWeight: theme.font.fontWeightMedium,
        },
        '& .time-details': {
            fontSize: '1.5rem',
            fontWeight: theme.font.fontWeightRegular,
        },

        '& .title': {
            fontSize: '1.5rem',
            fontWeight: theme.font.fontWeightRegular,
        },
        '& .subtitle': {
            fontSize: '1.8rem',
            fontWeight: theme.font.fontWeightMedium,
            color: theme.color.primary,
        },

        '& .rotated-barcode-container': {
            transform: 'rotate(270deg)',
            marginLeft: '0',

            '& >svg': {
                maxHeight: '10rem',
                width: '100%',
                objectFit: 'cover', // Ensure the image covers the entire box
            },
        },
    },
}));
