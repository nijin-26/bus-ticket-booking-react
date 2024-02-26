import data from '../locales/en/en.json';

const {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    tripDetails,
    tripListing,
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
} = data;

const resources = {
    ns1,
    ns2,
    auth,
    headerFooter,
    seatLayout,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    tripDetails,
    tripListing,
    landingPage,
    passengerDetails,
    logoutConfirmationModal,
    error,
    bookingPageConfirmation,
} as const;

export default resources;
