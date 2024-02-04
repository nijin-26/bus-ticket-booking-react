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
    primary: colors.deepPurple,
    secondary: colors.lightPurple,
    textPrimary: colors.black,
    textSecondary: colors.grey500,
    background: colors.white,
    red: colors.red,
    boxShadowPrimary: colors.boxShadowPrimary,
    cardWhite: colors.cardWhite
};

const darkTheme = {
    primary: colors.lightPurple,
    secondary: colors.deepPurple,
    background: colors.black,
    textPrimary: colors.white,
    textSecondary: colors.grey500,
    red: colors.red,
    boxShadowPrimary: colors.boxShadowPrimary,
    cardWhite: colors.cardWhite
};

export const getCustomTheme = (mode: PaletteMode): Theme => ({
    font: fontStyles,
    color: mode === 'light' ? lightTheme : darkTheme,
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
