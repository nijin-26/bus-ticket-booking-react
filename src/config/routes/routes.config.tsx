import { RouteObject } from 'react-router-dom';
import { LandingPage, TripsListingPage, TripBookingPage } from '../../pages';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Layout } from '../../layout';
import { paths } from '..';
import { BookingsListPage } from '../../pages/BookingsListPage/BookingsListPage';
import { UsersListingPage } from '../../pages/UserListingPage/UsersListingPage';
import { RequireAuth } from '../../components/RequireAuth/RequireAuth';
import { EUserRole } from '../../types';
import { TicketPage } from '../../pages/TicketPage/TicketPage';
import { getAllBookings, getMyBookings } from '../../api/endpoints/ticket.api';

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
                        element: (
                            <BookingsListPage
                                key="allBookings"
                                getData={getAllBookings}
                                frontendPagination={true}
                            />
                        ),
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
                        element: (
                            <BookingsListPage
                                key="myBookings"
                                getData={getMyBookings}
                                frontendPagination={false}
                            />
                        ),
                    },
                ],
            },
            {
                path: `${paths.ticket}/:pnr`,
                element: <TicketPage />,
            },
            {
                path: paths.error,
                element:<ErrorPage />
            }
        ],
    },
];
