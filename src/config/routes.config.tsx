import { RouteObject } from "react-router-dom";
import { LandingPage, TripDetailPage, TripsListingPage } from "../pages";
import { ErrorPage } from "../pages/ErrorPage/ErrorPage";

export const routesConfig: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/trips",
    element: <TripsListingPage />,
  },
  {
    path: "/trips/:tripId",
    element: <TripDetailPage />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];
