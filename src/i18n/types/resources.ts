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
    landingPage,
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
    landingPage,
} as const;

export default resources;
