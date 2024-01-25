import { RouteObject } from 'react-router-dom';
import { LandingPage, TripDetailPage, TripsListingPage } from '../pages';
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';
import { Layout } from '../layout';

export const routesConfig: RouteObject[] = [
    {
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <LandingPage />,
            },
            {
                path: '/trips',
                element: <TripsListingPage />,
            },
            {
                path: '/trips/:tripId',
                element: <TripDetailPage />,
            },
        ],
    },
];
