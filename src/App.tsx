import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getCustomTheme, routesConfig } from './config';
import { GlobalStyle } from './config';
import { ThemeProvider } from '@emotion/react';

// MUI Theme
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

const basename = '/';

const router = createBrowserRouter(routesConfig, {
    basename,
});

function App() {
    const [loading] = useState(false);
    const [mode] = useState('light'); // Replace with redux

    return (
        <MuiThemeProvider theme={createTheme()}>
            <ThemeProvider theme={getCustomTheme(mode)}>
                <GlobalStyle />
                <CssBaseline />
                {loading ? (
                    <div>loading</div>
                ) : (
                    <RouterProvider router={router} />
                )}
            </ThemeProvider>
        </MuiThemeProvider>
    );
}

export default App;
