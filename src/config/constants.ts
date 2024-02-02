import { ILocationOptions } from '../components/actionBar/types';

export const paths = {
    home: '/',
    tripsListing: '/trips',
    tripDetail: '/trips/:tripId',
};

export const colors = {
    deepPurple: '#6750A4',
    lightPurple: '#E8DEF8',
    white: '#fff',
    grey500: '#9e9e9e',
    black: '#202124',
};

// api format: id, name => mui format: id, label
export const locationOptions: ILocationOptions[] = [
    { id: 1, label: 'Trivandrum' },
    { id: 2, label: 'Chennai' },
    { id: 3, label: 'Bangalore' },
    { id: 4, label: 'Pune' },
    { id: 5, label: 'Mumbai' },
    { id: 5, label: 'Ahmedabad' },
    { id: 5, label: 'Lucknow' },
];
