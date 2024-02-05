import data from '../locales/en/en.json';

const { ns1, ns2, headerFooter } = data;
const resources = {
    ns1,
    ns2,
    headerFooter,
} as const;

export default resources;
