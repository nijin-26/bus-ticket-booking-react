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
import { bookTicket } from './api/endpoints/ticket.api';
import { IGender } from './types';
import { getAllTrips, getTrip, getTrips } from './api';
import { ISortOrder, ITripsSortKey } from './api/types/trip';

const basename = '/';

const router = createBrowserRouter(routesConfig, {
    basename,
});

function App() {
    const [loading] = useState(false);
    const mode = useAppSelector((state) => state.theme.currentTheme);

    useEffect(() => {
        async function test() {
            // const trip = await getTrip('1');
            // console.log(trip);

            // const trips = await getAllTrips();
            // console.log(trips);

            // const tripsQuery = await getTrips({
            //     originId: '8',
            //     destinationId: '9',
            //     tripDate: '2024-05-14',
            //     sortBy: ITripsSortKey.ARRIVAL_TIMESTAMP,
            //     sortOrder: ISortOrder.ASC,
            //     page: 1,
            //     pageSize: 10,
            // });
            // console.log(tripsQuery);

            const ticket = await bookTicket('1', [
                {
                    seatNumber: 1,
                    passenger: {
                        fullName: 'John Doe',
                        age: 25,
                        gender: IGender.MALE,
                    },
                },
            ]);
            console.log(ticket);
        }
        test().catch(console.error);
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
