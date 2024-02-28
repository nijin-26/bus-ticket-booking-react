import { RouteObject } from 'react-router-dom';
import { LandingPage, TripsListingPage, TripBookingPage } from '../../pages';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Layout } from '../../layout';
import { paths } from '..';
import { UsersListingPage } from '../../pages/UserListing/UsersListingPage';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';
import { EUserRole } from '../../types';
import { TicketPage } from '../../pages/TicketPage/TicketPage';

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
                element: <RequireAuth allowedRoles={[EUserRole.ADMIN]} />,
                children: [
                    {
                        path: paths.usersListing,
                        element: <UsersListingPage />,
                    },
                ],
            },
            {
                element: (
                    <RequireAuth
                        allowedRoles={[EUserRole.ADMIN, EUserRole.CUSTOMER]}
                    />
                ),
                children: [
                    {
                        path: paths.tripBooking,
                        element: <TripBookingPage />,
                    },
                ],
            },
            {
                path: `${paths.ticket}/:pnr`,
                element: <TicketPage />,
            },
            {
                path: paths.tripBooking,
                element: <TripBookingPage />,
            },
        ],
    },
];
