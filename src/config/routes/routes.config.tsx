import { RouteObject } from 'react-router-dom';
import { LandingPage, TripsListingPage, TripBookingPage } from '../../pages';
import { ErrorPage } from '../../pages/ErrorPage/ErrorPage';
import { Layout } from '../../layout';
import { paths } from '..';
import { AllBookingsPage } from '../../pages/BookingsList/AllBookingsPage/AllBookingsPage';
import { UsersListingPage } from '../../pages/UserListing/UsersListingPage';
import { MyBookingsPage } from '../../pages/BookingsList/MyBookingsPage/MyBookingsPage';

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
                path: paths.usersListing,
                element: <UsersListingPage />,
            },
            {
                path: paths.tripBooking,
                element: <TripBookingPage />,
            },
            {
                path: paths.myBookings,
                element: <MyBookingsPage />,
            },
        ],
    },
];
