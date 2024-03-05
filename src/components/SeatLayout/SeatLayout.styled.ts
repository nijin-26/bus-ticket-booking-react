import styled from '@emotion/styled';

interface ISeatLayoutWrapperProps {
    isVerticalOrientation: boolean;
}

const seatLayoutWrapper = styled('div')<ISeatLayoutWrapperProps>(
    ({ theme, isVerticalOrientation }) => ({
        display: 'inline-flex',
        padding: isVerticalOrientation
            ? '2rem 2rem 4rem 2rem'
            : '2rem 4rem 2rem 2rem',
        borderRadius: '2rem',
        backgroundColor: theme.color.busLayoutBg,
        overflow: 'auto',
        flexDirection: isVerticalOrientation ? 'column' : 'row',
        maxWidth: isVerticalOrientation ? '32rem' : 'none',
        alignSelf: 'center',

        '.driver-cabin': {
            display: 'flex',
            border: `0.3rem solid ${theme.color.bookedSeat}`,
            borderWidth: isVerticalOrientation
                ? '0 0 0.3rem 0'
                : '0 0.3rem 0 0',
            margin: isVerticalOrientation ? '0 0 4rem 0' : '0 4rem 0 0',
            padding: isVerticalOrientation ? '0 0 3rem 0' : '0 4rem 0 0',
            justifyContent: 'end',

            '.steering': {
                width: '4.5rem',
                height: '4.5rem',
            },
        },

        '.seats-container': {
            display: 'flex',
            flexGrow: 1,
            gap: '1rem',
            justifyContent: 'space-between',
            flexDirection: isVerticalOrientation ? 'column' : 'row',

            '.seat-row': {
                display: 'flex',
                flexDirection: isVerticalOrientation ? 'row-reverse' : 'column',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                gap: '1rem',
                justifyContent: 'space-between',
            },
        },
    })
);
export default seatLayoutWrapper;
