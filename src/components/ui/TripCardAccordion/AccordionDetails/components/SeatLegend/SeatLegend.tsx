import { Typography } from '@mui/material';
import SeatLegendWrapper from './SeatLegend.styled';
import { useTranslation } from 'react-i18next';
import Seat from '../../../../../BusLayout/Seat/Seat';
import Window from '../../../../../BusLayout/Window.styled';

export const SeatLegend = () => {
    const { t } = useTranslation('seatLayout');
    return (
        <SeatLegendWrapper>
            <li>
                <ul>
                    <Seat seatSize="large" seatStatus="available" mode="view" />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('available')}
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <Seat
                        seatSize="large"
                        seatStatus="unavailable"
                        mode="view"
                    />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('unavailable')}
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <Seat seatSize="large" seatStatus="selected" mode="view" />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('selected')}
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <Window className="window" />
                    <li>
                        <Typography variant="body2" className="title">
                            {t('window')}
                        </Typography>
                    </li>
                </ul>
            </li>
        </SeatLegendWrapper>
    );
};
