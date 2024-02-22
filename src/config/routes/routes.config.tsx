import { RouteObject } from 'react-router-dom';
import { LandingPage, TripsListingPage, TripBookingPage } from '../../pages';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Layout } from '../../layout';
import { paths } from '..';
import { UsersListingPage } from '../../pages/UserListing/UsersListingPage';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';

export const routesConfig: RouteObject[] = [
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: paths.home,
                element: <LandingPage />,
            },
            {
                path: paths.tripsListing,
                element: <TripsListingPage />,
            },
            {
                element: <RequireAuth />,
                children: [
                    {
                        path: paths.usersListing,
                        element: <UsersListingPage />,
                    },
                    {
                        path: paths.tripBooking,
                        element: <TripBookingPage />,
                    },
                ],
            },
        ],
    },
];
