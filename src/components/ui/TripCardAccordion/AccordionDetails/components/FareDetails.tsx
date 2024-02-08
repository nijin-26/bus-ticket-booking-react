import { Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
interface IFareDetailsProps {
    noOfSeats: number;
    farePerSeat: number;
}

export const FareDetails = ({ noOfSeats, farePerSeat }: IFareDetailsProps) => {
    const totalFare = noOfSeats * farePerSeat;
    const totalFareInString = `${noOfSeats} seat${
        noOfSeats > 1 ? 's' : ''
        } * ₹${farePerSeat} = ₹${totalFare}`;
    
    const { t } = useTranslation('tripDetails');

    return (
        noOfSeats > 0 &&
        farePerSeat > 0 && (
            <Stack direction={'row'} spacing={1}>
                <Typography variant="body2" className="title">
                    {t('checkoutTitle')}{'  '}:
                </Typography>
                <Typography variant="body2" className="value">
                    {totalFareInString}
                </Typography>
            </Stack>
        )
    );
};
