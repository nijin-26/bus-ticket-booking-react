import data from '../locales/en/en.json';

const {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    tripDetails,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
    bookingsList,
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
} as const;

export default resources;
