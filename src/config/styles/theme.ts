import { Theme } from '@emotion/react';
import { colors } from '..';
import { PaletteMode, ThemeOptions } from '@mui/material';

const fontStyles = {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 600,
    fontWeightBold: 700,
    h1: '4rem',
    h2: '2rem',
    h3: '1.5rem',
    lg: '1.6rem',
    md: '1.3rem',
    sm: '1.1rem',
    s: '0.8rem',
};

const lightTheme = {
    mode: 'light',
    primary: colors.deepPurple,
    secondary: colors.lightPurple,
    textPrimary: colors.black,
    textSecondary: colors.grey500,
    background: colors.white,
    selectedSeat: colors.selectedSeat,
    bookedSeat: colors.bookedSeat,
    seat: colors.seat,
    busLayoutBg: colors.busLayoutBg,
    red: colors.red,
    redHover: colors.redHover,
    boxShadowPrimary: colors.boxShadowLight,
    cardWhite: colors.cardWhite,
    grey500: colors.grey500,
    linkColor: colors.linkColor,
    green: colors.green,
    windowColor: colors.windowColor,
    brakeLight: colors.lightModeBrakeLight,
    headLight: colors.lightModeHeadLight,
    tyre: colors.tyre,
};

const darkTheme = {
    mode: 'dark',
    primary: colors.lightPurple,
    secondary: colors.deepPurple,
    background: colors.black,
    textPrimary: colors.white,
    textSecondary: colors.grey500,
    selectedSeat: colors.selectedSeat,
    bookedSeat: colors.darkBookedSeat,
    seat: colors.darkSeat,
    busLayoutBg: colors.darkBusLayoutBg,
    red: colors.red,
    redHover: colors.redHover,
    boxShadowPrimary: colors.boxShadowDark,
    cardWhite: colors.black,
    grey500: colors.grey500,
    linkColor: colors.darkLinkColor,
    green: colors.green,
    windowColor: colors.windowColor,
    tyre: colors.tyre,
    brakeLight: colors.darkModeBrakeLight,
    headLight: colors.darkModeHeadLight,
};

const breakpoints = {
    extraSmall: '31rem',
    small: '38rem',
    medium: '56rem',
    large: '75rem',
    extraLarge: '100rem',
};

export const getCustomTheme = (mode: PaletteMode): Theme => ({
    font: fontStyles,
    color: mode === 'light' ? lightTheme : darkTheme,
    breakpointValues: breakpoints,
});

export const getMuiTheme = (mode: PaletteMode): ThemeOptions => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for light mode
                  primary: {
                      main: colors.deepPurple,
                  },
                  secondary: {
                      main: colors.lightPurple,
                  },
                  text: {
                      primary: colors.black,
                      secondary: colors.grey500,
                  },
              }
            : {
                  // palette values for dark mode
                  primary: {
                      main: colors.lightPurple,
                  },
                  secondary: {
                      main: colors.deepPurple,
                  },
                  background: {
                      default: colors.black,
                  },
                  text: {
                      primary: colors.white,
                      secondary: colors.grey500,
                  },
              }),
    },
    typography: {
        htmlFontSize: 10,
        fontFamily: ['Open Sans', 'sans-serif'].join(),
    },
});
