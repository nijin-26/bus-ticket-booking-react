import { PaletteMode, ThemeOptions } from '@mui/material';
import { amber, deepOrange, grey } from '@mui/material/colors';

export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
    palette: {
        mode,
        ...(mode === 'light'
            ? {
                  // palette values for light mode
                  primary: amber,
                  text: {
                      primary: grey[900],
                      secondary: grey[800],
                  },
              }
            : {
                  // palette values for dark mode
                  primary: deepOrange,
                  background: {
                      default: deepOrange[900],
                      paper: deepOrange[900],
                  },
                  text: {
                      primary: '#fff',
                      secondary: grey[500],
                  },
              }),
    },
});
