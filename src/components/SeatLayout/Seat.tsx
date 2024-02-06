import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SeatWrapper from './Seat.styled';

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
            <SeatWrapper
                className={`seat ${seatStatus}`}
                onClick={() => {
                    updateSelectedSeats && updateSelectedSeats(seatNumber);
                }}
            ></SeatWrapper>
        </Tooltip>
    ) : (
        <SeatWrapper className={`seat ${seatStatus}`}></SeatWrapper>
    );
};

export default Seat;
