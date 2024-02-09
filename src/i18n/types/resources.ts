import data from '../locales/en/en.json';

const {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    tripDetails,
    passengerDetails,
    auth,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    landingPage,
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
    passengerDetails,
    landingPage,
} as const;

export default resources;
