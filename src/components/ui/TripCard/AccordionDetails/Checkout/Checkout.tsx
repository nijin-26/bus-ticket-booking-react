import { Stack, Typography } from '@mui/material';
import { CheckoutWrapper } from './Checkout.styled';
import { StyledButton } from '../../../../Button/Button.styled';
import { useTranslation } from 'react-i18next';
import { paths } from '../../../../../config';
import { useLocation } from 'react-router-dom';

interface ICheckoutProps {
    noOfSeats: number;
    farePerSeat: number;
}
export const Checkout = ({ noOfSeats, farePerSeat }: ICheckoutProps) => {
    const totalFare = noOfSeats * farePerSeat;
    const totalFareInString = `${noOfSeats} seat${noOfSeats > 1 ? 's' : ''} * ₹${farePerSeat} = ₹${totalFare}`;

    const { t } = useTranslation('tripDetails');
    const currentUrl = useLocation();

    return (
        <CheckoutWrapper
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            spacing={3}
            mt={5}
        >
            {noOfSeats > 0 && farePerSeat > 0 && (
                <Stack direction={'row'} spacing={1}>
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

            {currentUrl.pathname !== paths.tripBooking && (
                <StyledButton
                    variant="contained"
                    disabled={!(noOfSeats > 0 && farePerSeat > 0)}
                >
                    {t('checkoutBtnTxt')}
                </StyledButton>
            )}
        </CheckoutWrapper>
    );
};
