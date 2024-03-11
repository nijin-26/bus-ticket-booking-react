import styled from '@emotion/styled';

interface ISeatLayoutWrapperProps {
    isVerticalOrientation: boolean;
}

const seatLayoutWrapper = styled('div')<ISeatLayoutWrapperProps>(
    ({ theme, isVerticalOrientation }) => ({
        display: 'inline-flex',
        borderRadius: '2rem',
        backgroundColor: theme.color.busLayoutBg,
        ...(isVerticalOrientation
            ? {
                  padding: '2rem 2rem 4rem 2rem',
                  flexDirection: 'column',
                  maxWidth: '32rem',
              }
            : {
                  padding: '2rem 4rem 2rem 2rem',
                  flexDirection: 'row',
                  maxWidth: 'none',
              }),
        alignSelf: 'center',
        width: '100%',
        position: 'relative',

        '.driver-cabin': {
            display: 'flex',
            border: `0.3rem solid ${theme.color.bookedSeat}`,
            ...(isVerticalOrientation
                ? {
                      borderWidth: '0 0 0.3rem 0',
                      margin: '0 0 4rem 0',
                      padding: '0 0 3rem 0',
                  }
                : {
                      borderWidth: '0 0.3rem 0 0',
                      margin: '0 4rem 0 0',
                      padding: '0 4rem 0 0',
                  }),
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
                position: 'relative',
            },
        },

        '.brake-lights-container': {
            listStyle: 'none',
            display: 'flex',
            flexDirection: isVerticalOrientation ? 'row' : 'column',
            justifyContent: 'space-between',
            position: 'absolute',
            margin: 0,

            ...(isVerticalOrientation
                ? {
                      right: 0,
                      padding: '0 3rem',
                      top: 'auto',
                      bottom: '-0.3rem',
                      height: 'auto',
                      width: '100%',
                  }
                : {
                      right: '-0.3rem',
                      padding: '3rem 0',
                      top: 0,
                      bottom: 'auto',
                      height: '100%',
                      width: 'auto',
                  }),

            '.brake-light': {
                backgroundColor: theme.color.brakeLight,
                borderRadius: '15%',
                ...(isVerticalOrientation
                    ? {
                          width: '4rem',
                          height: '0.7rem',
                          ...(theme.color.mode === 'dark' && {
                              boxShadow: `0px 7px 13px ${theme.color.brakeLight}`,
                          }),
                      }
                    : {
                          width: '0.7rem',
                          height: '4rem',
                          ...(theme.color.mode === 'dark' && {
                              boxShadow: `5px 0px 10px ${theme.color.brakeLight}`,
                          }),
                      }),
            },
        },

        '.head-lights-container': {
            listStyle: 'none',
            display: 'flex',
            flexDirection: isVerticalOrientation ? 'row' : 'column',
            justifyContent: 'space-between',
            position: 'absolute',
            left: '-0.5rem',
            margin: 0,

            ...(isVerticalOrientation
                ? {
                      padding: '0 3rem',
                      bottom: 'auto',
                      top: '-0.5rem',
                      height: 'auto',
                      width: '100%',
                  }
                : {
                      padding: '3rem 0',
                      bottom: 0,
                      top: 'auto',
                      height: '100%',
                      width: 'auto',
                  }),

            '.head-light': {
                backgroundColor: theme.color.headLight,
                width: isVerticalOrientation ? '4rem' : '0.7rem',
                height: isVerticalOrientation ? '0.7rem' : '4rem',
                borderRadius: isVerticalOrientation
                    ? '50% 50% 15% 15%'
                    : '50% 15% 15% 50%',
                ...(theme.color.mode === 'dark' && {
                    boxShadow: isVerticalOrientation
                        ? `0 -1rem 1.3rem ${theme.color.headLight}`
                        : `-1.5rem 0 1.7rem ${theme.color.headLight}`,
                }),
            },
        },
    })
);
export default seatLayoutWrapper;
