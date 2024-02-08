import data from '../locales/en/en.json';

const { ns1, ns2, headerFooter, seatLayout, tripDetails, auth } = data;
const resources = {
    ns1,
    ns2,
    auth,
    headerFooter,
    seatLayout,
    tripDetails,
} as const;

export default resources;
