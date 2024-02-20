import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getCustomTheme, getMuiTheme, routesConfig } from './config';
import { GlobalStyle } from './config';
import { ThemeProvider as CustomThemeProvider } from '@emotion/react';

// MUI Theme
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

//React-toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAppSelector } from './app/hooks';

const basename = '/';

const router = createBrowserRouter(routesConfig, {
    basename,
});

function App() {
    const [loading] = useState(false);
    const mode = useAppSelector((state) => state.theme.currentTheme);

    return (
        <>
            <ToastContainer theme={mode} />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
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
            </LocalizationProvider>
        </>
    );
}

export default App;
