import { RouteObject } from 'react-router-dom';
import { LandingPage,  TripsListingPage } from '../../pages';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Layout } from '../../layout';
import { paths } from '..';
import { AllBookingsPage } from '../../pages/BookingsList/AllBookingsPage';
import { UsersListingPage } from '../../pages/UserListing/UsersListingPage';

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
                path: paths.bookings,
                element: <AllBookingsPage />,
            },
            {
                path: paths.tripDetail,
                element: <TripDetailPage />,
            },
            {
                path: paths.usersListing,
                element: <UsersListingPage />,
            },
        ],
    },
];
