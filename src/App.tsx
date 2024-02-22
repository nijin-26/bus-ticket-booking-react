import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { getCustomTheme, getMuiTheme, routesConfig } from './config';
import { GlobalStyle } from './config';
import { ThemeProvider as CustomThemeProvider } from '@emotion/react';

// MUI Theme
import { CssBaseline, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';

import { useAppSelector } from './app/hooks';
import { getAllBookings, getMyBookings } from './api/endpoints/ticket.api';

const basename = '/';

const router = createBrowserRouter(routesConfig, {
    basename,
});

function App() {
    const [loading] = useState(false);
    const mode = useAppSelector((state) => state.theme.currentTheme);

    const test = async () => {
        const res = await getMyBookings();
        console.log(res);
    };

    useEffect(() => {
        test().catch((e) => {
            console.error(e);
        });
    }, []);

    return (
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
    );
}

export default App;
