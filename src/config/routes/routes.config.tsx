import { RouteObject } from 'react-router-dom';
import { LandingPage, TripsListingPage, TripBookingPage } from '../../pages';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Layout } from '../../layout';
import { paths } from '..';
import { AllBookingsListPage } from '../../pages/BookingsListPage/AllBookingsList/AllBookingsListPage';
import { UsersListingPage } from '../../pages/UserListingPage/UsersListingPage';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';
import { EUserRole } from '../../types';
import { TicketPage } from '../../pages/TicketPage/TicketPage';
import { MyBookingsListPage } from '../../pages/BookingsListPage/MyBookingsList/MyBookingsListPage';

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
                    {
                        path: paths.bookings,
                        element: <MyBookingsListPage />,
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
                    {
                        path: paths.myBookings,
                        element: <AllBookingsListPage />,
                    },
                ],
            },
            {
                path: paths.ticket,
                element: <TicketPage />,
            },
        ],
    },
];
