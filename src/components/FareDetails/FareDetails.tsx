import { Stack, Typography, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
interface IFareDetailsProps {
    noOfSeats: number;
    farePerSeat: number;
}

export const FareDetails = ({ noOfSeats, farePerSeat }: IFareDetailsProps) => {
    const { t } = useTranslation('tripDetails');
    const totalFare = noOfSeats * farePerSeat;
    const totalCalculationInString = `${noOfSeats} ${t('seat')}${
        noOfSeats > 1 ? 's' : ''
    } x ₹${farePerSeat} = ₹${totalFare}`;
    const totalFareInString = `₹${totalFare}`;

    const { font, breakpointValues } = useTheme();
    const isMinWidth = useMediaQuery(`(min-width:${breakpointValues.small})`);

    return (
        <Stack direction={'row'} spacing={1} flexWrap={'wrap'}>
            <Typography
                variant="body1"
                fontSize={isMinWidth ? font.h2 : font.md}
                fontWeight={font.fontWeightMedium}
            >
                {t('checkoutTitle')}
                {'  '}:
            </Typography>
            <Typography fontSize={isMinWidth ? font.h2 : font.md}>
                {!isMinWidth ? totalFareInString : totalCalculationInString}
            </Typography>
        </Stack>
    );
};
