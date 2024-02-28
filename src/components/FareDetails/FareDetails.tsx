import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
interface IFareDetailsProps {
    noOfSeats: number;
    farePerSeat: number;
}

export const FareDetails = ({ noOfSeats, farePerSeat }: IFareDetailsProps) => {
    const { t } = useTranslation('tripDetails');
    const totalFare = noOfSeats * farePerSeat;
    const totalFareInString = `${noOfSeats} ${t('seat')}${
        noOfSeats > 1 ? 's' : ''
    } x ₹${farePerSeat} = ₹${totalFare}`;

    const { font } = useTheme();

    return (
        <Stack direction={'row'} spacing={1}>
            <Typography
                variant="body1"
                fontSize={font.h2}
                fontWeight={font.fontWeightMedium}
            >
                {t('checkoutTitle')}
                {'  '}:
            </Typography>
            <Typography fontSize={font.h2}>{totalFareInString}</Typography>
        </Stack>
    );
};
