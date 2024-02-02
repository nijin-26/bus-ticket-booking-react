import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getCustomTheme, getMuiTheme, routesConfig } from './config';
import { GlobalStyle } from './config';
import { ThemeProvider as CustomThemeProvider } from '@emotion/react';

// MUI Theme
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

import { useAppSelector } from './app/hooks';

const basename = '/';

const router = createBrowserRouter(routesConfig, {
    basename,
});

function App() {
    const [loading] = useState(false);
    const mode = useAppSelector((state) => state.theme.currentTheme);

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
