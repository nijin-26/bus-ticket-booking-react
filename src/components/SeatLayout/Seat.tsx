import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Seat = ({
    seatNumber,
    seatStatus,
    updateSelectedSeats,
}: {
    seatNumber?: number;
    seatStatus: 'available' | 'unavailable' | 'selected' | 'aisle';
    updateSelectedSeats?: (seatNumber: number) => void;
}) => {
    const { t } = useTranslation('seatLayout');
    return seatNumber ? (
        <Tooltip
            title={`${seatNumber}: ${t(
                seatStatus as 'available' | 'unavailable' | 'selected'
            )}`}
            arrow
        >
            <li
                className={`seat ${seatStatus}`}
                onClick={() => {
                    updateSelectedSeats && updateSelectedSeats(seatNumber);
                }}
            ></li>
        </Tooltip>
    ) : (
        <li className={`seat ${seatStatus}`}></li>
    );
};

export default Seat;
