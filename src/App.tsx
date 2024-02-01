import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getCustomTheme, getMuiTheme, routesConfig } from './config';
import { GlobalStyle } from './config';
import { ThemeProvider as CustomThemeProvider } from '@emotion/react';

// MUI Theme
import {
    CssBaseline,
    ThemeProvider as MuiThemeProvider,
    PaletteMode,
} from '@mui/material';
import { createTheme } from '@mui/material';

const basename = '/';

const router = createBrowserRouter(routesConfig, {
    basename,
});

function App() {
    const [loading] = useState(false);
    const [mode] = useState<PaletteMode>('light'); // Replace with redux

    return (
        <MuiThemeProvider theme={createTheme(getMuiTheme(mode))}>
            <CustomThemeProvider theme={getCustomTheme(mode)}>
                <GlobalStyle />
                <CssBaseline />
                {loading ? (
                    <div>loading</div>
                ) : (
                    <RouterProvider router={router} />
                )}
            </CustomThemeProvider>
        </MuiThemeProvider>
    );
}

export default App;
