import { Typography } from '@mui/material';
import SeatLegendWrapper from './SeatLegend.styled';
import { useTranslation } from 'react-i18next';
import Seat from '../../../../../SeatLayout/Seat';

export const SeatLegend = () => {
    const { t } = useTranslation('seatLayout');
    return (
        <SeatLegendWrapper>
            <li>
                <ul>
                    <Seat seatStatus="available" />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('available')}
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <Seat seatStatus="unavailable" />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('unavailable')}
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <Seat seatStatus="selected" />
                    <li>
                        <Typography
                            variant="body2"
                            className="title"
                            style={{ marginLeft: '15px' }}
                        >
                            {t('selected')}
                        </Typography>
                    </li>
                </ul>
            </li>
        </SeatLegendWrapper>
    );
};
