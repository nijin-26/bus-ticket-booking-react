import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        font: {
            fontWeightLight: number;
            fontWeightRegular: number;
            fontWeightMedium: number;
            fontWeightBold: number;
            h1: string;
            h2: string;
            h3: string;
            lg: string;
            md: string;
            sm: string;
            s: string;
        };

        color: {
            mode: string;
            primary: string;
            secondary: string;
            textPrimary: string;
            textSecondary: string;
            background: string;
            selectedSeat: string;
            bookedSeat: string;
            seat: string;
            busLayoutBg: string;
            red: string;
            redHover: string;
            boxShadowPrimary: string;
            grey500: string;
            linkColor: string;
            cardWhite: string;
            green: string;
            windowColor: string;
            brakeLight: string;
            headLight: string;
            tyre: string;
        };

        breakpointValues: {
            extraSmall: string;
            small: string;
            medium: string;
            large: string;
            extraLarge: string;
        };
    }
}
