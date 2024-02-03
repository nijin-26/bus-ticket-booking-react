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
    red: '#D84E55',
    boxShadowPrimary: 'rgba(0,0,0,0.26)',
};

export enum ILanguage {
    English = 'en',
    Spanish = 'es',
}

export const LANGUAGES: Language[] = [
    { label: 'English', code: ILanguage.English },
    { label: 'Spanish', code: ILanguage.Spanish},
];
