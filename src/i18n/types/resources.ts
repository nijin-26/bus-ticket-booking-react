import data from '../locales/en/en.json';

const { ns1, ns2, headerFooter, seatLayout, auth } = data;
const resources = {
    ns1,
    ns2,
    auth,
    headerFooter,
    seatLayout,
} as const;

export default resources;
