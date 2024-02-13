import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
interface IFareDetailsProps {
    noOfSeats: number;
    farePerSeat: number;
}

export const FareDetails = ({ noOfSeats, farePerSeat }: IFareDetailsProps) => {
    const { t } = useTranslation('tripDetails');

    const totalFare = noOfSeats * farePerSeat;
    const totalFareInString = `${noOfSeats} ${t('selectAlertTitle').toLowerCase()}${
        noOfSeats > 1 ? 's' : ''
    } x ₹${farePerSeat} = ₹${totalFare}`;

    return (
        <Stack direction={'row'} spacing={1}>
            <Typography variant="body2" className="title">
                {t('checkoutTitle')}
                {'  '}:
            </Typography>
            <Typography variant="body2" className="value">
                {totalFareInString}
            </Typography>
        </Stack>
    );
};
