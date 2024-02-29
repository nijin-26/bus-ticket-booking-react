import data from '../locales/en/en.json';

const {
    ns1,
    ns2,
    auth,
    headerFooter,
    seatLayout,
    tripDetails,
    tripListing,
    passengerDetails,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    bookingsList,
    usersList,
    tableNoRowsOverlay,
    tableExportOptions,
    landingPage,
    logoutConfirmationModal,
    error,
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
    bookingsList,
    tripListing,
    usersList,
    tableExportOptions,
    tableNoRowsOverlay,
    landingPage,
    auth,
    passengerDetails,
    logoutConfirmationModal,
    error,
} as const;

export default resources;
