import { Stack, Typography } from '@mui/material';
import { CheckoutWrapper } from './Checkout.styled';
import { StyledButton } from '../../../../Button/Button.styled';
import { useTranslation } from 'react-i18next';

interface ICheckoutProps {
    noOfSeats: number;
    farePerSeat: number;
}
export const Checkout = ({ noOfSeats, farePerSeat }: ICheckoutProps) => {
    const totalFare = noOfSeats * farePerSeat;
    const totalFareInString = `${noOfSeats} seat${noOfSeats > 1 ? 's' : ''} * ₹${farePerSeat} = ₹${totalFare}`;

    const { t } = useTranslation('tripDetails');

    return (
        <CheckoutWrapper
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            spacing={6}
            className="hi"
        >
            {noOfSeats > 0 && farePerSeat > 0 && (
                <Stack direction={'row'} spacing={1} className="totalAmt">
                    <Typography variant="body2" className="title">
                        {t('checkoutTitle')}
                    </Typography>
                    <Typography variant="body2">
                        ({t('checkoutSubtitle')}) :
                    </Typography>

                    <Typography variant="body2" className="value">
                        {totalFareInString}
                    </Typography>
                </Stack>
            )}
            <StyledButton
                variant="contained"
                disabled={!(noOfSeats > 0 && farePerSeat > 0)}
            >
                Book now
            </StyledButton>
        </CheckoutWrapper>
    );
};
