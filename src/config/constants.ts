import { ILocationOptions } from '../components/actionBar/types';
import { Language, LanguageCode } from '../types';

export const paths = {
    home: '/',
    tripsListing: '/trips',
    tripDetail: '/trips/:tripId',
    bookings: '/bookings',
    usersListing: '/users',
    tripBooking: '/trips/booking',
    myBookings: '/user/bookings',
    ticket: '/trips/booking/ticket',
    error: '/404',
};

export const colors = {
    deepPurple: '#6750A4',
    lightPurple: '#E8DEF8',
    white: '#fff',
    cardWhite: '#f9f9f9',
    grey500: '#9e9e9e',
    black: '#202124',
    selectedSeat: '#56a55c',
    bookedSeat: '#bdbdbd',
    darkBookedSeat: '#8a8a8a',
    seat: '#fcfcfc',
    darkSeat: '#e1dede',
    busLayoutBg: '#E8DEF8',
    darkBusLayoutBg: '#575757',
    red: '#D84E55',
    boxShadowLight: 'rgba(0,0,0,0.26)',
    boxShadowDark: 'rgba(0,0,0,1)',
    green: '#56A55C',
    redHover: '#AB3840',
    linkColor: '#0000EE',
    darkLinkColor: '#B596E8',
    windowColor: '#90D0E3',
    tyre: '#000000',
    darkModeBrakeLight: '#FF5961',
    lightModeBrakeLight: '#bdbdbd',
    darkModeHeadLight: '#eedd82',
    lightModeHeadLight: '#bdbdbd',
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

export const filterValues = {
    ac: 'AC',
    nonAc: 'NON_AC',
    seater: 'SEATER',
    sleeper: 'SLEEPER',
};

export const LANGUAGES: Language[] = [
    { label: 'English', code: LanguageCode.English },
    { label: 'Spanish', code: LanguageCode.Spanish },
];

export const rowsPerPage: number = 5;
