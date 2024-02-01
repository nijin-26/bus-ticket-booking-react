import { Theme } from '@emotion/react';
import { colors } from '..';

export const getCustomTheme = (mode: string): Theme => ({
    font: fontStyles,
    color: mode === 'light' ? lightTheme : darkTheme,
});

const fontStyles = {
    htmlFontSize: 10,
    fontFamily: ['Open Sans', 'sans-serif'].join(),
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
};

const darkTheme = {
    primary: colors.lightPurple,
    secondary: colors.deepPurple,
    background: colors.black,
    textPrimary: colors.white,
    textSecondary: colors.grey500,
};
