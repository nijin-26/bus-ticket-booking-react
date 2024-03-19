import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { ThemeProvider as CustomThemeProvider } from '@emotion/react';
import { getCustomTheme, getMuiTheme } from '../../config';
import { createTheme } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export const AllTheProviders = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <Provider store={store}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <MuiThemeProvider theme={createTheme(getMuiTheme('dark'))}>
                    <CustomThemeProvider theme={getCustomTheme('dark')}>
                        <BrowserRouter>{children}</BrowserRouter>
                    </CustomThemeProvider>
                </MuiThemeProvider>
            </LocalizationProvider>
        </Provider>
    );
};
