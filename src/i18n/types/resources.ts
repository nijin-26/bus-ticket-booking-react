import data from '../locales/en/en.json';

const { ns1, ns2, headerFooter, auth } = data;
const resources = {
    ns1,
    ns2,
    auth,
    headerFooter,
} as const;

export default resources;
