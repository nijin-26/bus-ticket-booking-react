import {  Typography } from '@mui/material';
import Seat from '../../../../SeatLayout/Seat';

export const SeatLegend = () => {
    return (
        <ul
            style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexDirection: 'row',
            }}
        >
            <li>
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        listStyle: 'none',
                    }}
                >
                    <li>
                        <Seat seatStatus="available" />
                    </li>
                    <li>
                        <Typography
                            variant="body2"
                            className="title"
                            style={{ marginLeft: '15px' }}
                        >
                            Available
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        listStyle: 'none',
                    }}
                >
                    <li>
                        <Seat seatStatus="unavailable" />
                    </li>
                    <li>
                        <Typography
                            variant="body2"
                            className="title"
                            style={{ marginLeft: '15px' }}
                        >
                            Unavailable
                        </Typography>
                    </li>
                </ul>
            </li>
            <li>
                <ul
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        listStyle: 'none',
                    }}
                >
                    <li>
                        <Seat seatStatus="selected" />
                    </li>
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
        </ul>
    );
};
