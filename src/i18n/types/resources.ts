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
    auth
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
} as const;

export default resources;
