import { Typography } from '@mui/material';
import Seat from '../../../../SeatLayout/Seat';
import SeatLegendWrapper from './SeatLegend.styled';

export const SeatLegend = () => {
    return (
        <SeatLegendWrapper>
            <li>
                <ul>
                    <Seat seatStatus="available" />
                    <li>
                        <Typography variant="body2" className="title">
                            Available
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul>
                    <Seat seatStatus="unavailable" />
                    <li>
                        <Typography variant="body2" className="title">
                            Unavailable
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
                            Selected
                        </Typography>
                    </li>
                </ul>
            </li>
        </SeatLegendWrapper>
    );
};
