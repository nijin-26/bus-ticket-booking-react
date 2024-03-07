import { Typography } from '@mui/material';
import SeatLegendWrapper from './SeatLegend.styled';
import { useTranslation } from 'react-i18next';
import Seat from '../../../../../BusLayout/Seat/Seat';

export const SeatLegend = () => {
    const { t } = useTranslation('seatLayout');
    return (
        <SeatLegendWrapper>
            <li>
                <ul>
                    <Seat seatStatus="available" mode="view" />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('available')}
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <Seat seatStatus="unavailable" mode="view" />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('unavailable')}
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <Seat seatStatus="selected" mode="view" />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('selected')}
                        </Typography>
                    </li>
                </ul>
            </li>
        </SeatLegendWrapper>
    );
};
