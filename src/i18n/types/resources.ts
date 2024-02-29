import data from '../locales/en/en.json';

const {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    tripDetails,
    passengerDetails,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    tripListing,
    auth,
    landingPage,
    bookingPageConfirmation,
    logoutConfirmationModal,
    error,
    errorPage,
} = data;

const resources = {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    tripDetails,
    tripListing,
    landingPage,
    auth,
    passengerDetails,
    logoutConfirmationModal,
    error,
    bookingPageConfirmation,
    errorPage,
} as const;

export default resources;
