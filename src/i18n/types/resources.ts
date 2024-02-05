import data from '../locales/en/en.json';

const { ns1, ns2, headerFooter, seatLayout } = data;
const resources = {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
} as const;

export default resources;
