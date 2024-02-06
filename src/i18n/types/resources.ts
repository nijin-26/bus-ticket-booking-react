import data from '../locales/en/en.json';

const {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    actionBarTab,
    actionBar,
    pnrSearch,
    filterSort,
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
} as const;

export default resources;
