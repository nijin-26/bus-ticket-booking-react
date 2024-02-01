import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { useMemo, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getDesignTokens, routesConfig } from './config';
import { CssBaseline, PaletteMode } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GlobalStyle } from './config';

const basename = '/';

const router = createBrowserRouter(routesConfig, {
    basename,
});

function App() {
    const [loading] = useState(false);
    const [mode] = useState<PaletteMode>('light'); // Replace with redux

    // Update the theme only if the mode changes
    const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <CssBaseline />
                {loading ? (
                    <div>loading</div>
                ) : (
                    <RouterProvider router={router} />
                )}
            </ThemeProvider>
        </LocalizationProvider>
    );
}

export default App;
