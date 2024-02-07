import data from '../locales/en/en.json';

const { ns1, ns2, headerFooter, seatLayout, tripDetails, passengerDetails } = data;
const resources = {
    ns1,
    ns2,
    headerFooter,
    seatLayout,
    tripDetails,
    passengerDetails,
} as const;

export default resources;
