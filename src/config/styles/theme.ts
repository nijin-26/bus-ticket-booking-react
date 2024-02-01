import { PaletteMode, ThemeOptions } from '@mui/material';
import { grey } from '@mui/material/colors';
import { colors } from '..';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
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
                      secondary: grey[500],
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
                      default: grey[900],
                  },
                  text: {
                      primary: colors.white,
                      secondary: grey[500],
                  },
              }),
    },
    typography: {
        htmlFontSize: 10,
        fontFamily: ['Open Sans', 'sans-serif'].join(),
        fontWeightMedium: 600, // semibold/medium
        h1: { fontSize: '4rem' },
        h2: { fontSize: '2rem' },
        h3: { fontSize: '1.6rem' },
        subtitle1: { fontSize: '1.6rem' }, // lg
        subtitle2: { fontSize: '1.3rem' }, // md
        body1: { fontSize: '1.1rem' }, //sm
        body2: { fontSize: '0.8rem' }, //s
    },
});
