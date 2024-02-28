import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SeatWrapper from './Seat.styled';

const Seat = ({
    seatNumber,
    seatStatus,
    updateSelectedSeats,
    mode,
}: {
    seatNumber?: number;
    seatStatus: 'available' | 'unavailable' | 'selected' | 'aisle';
    updateSelectedSeats?: (seatNumber: number) => void;
    mode: 'view' | 'edit';
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
                className={`seat ${seatStatus} ${
                    mode === 'view'
                        ? 'disable-click'
                        : seatStatus === 'available' ||
                          seatStatus === 'selected'
                        ? 'cursor-pointer'
                        : 'disable-click'
                }`}
                onClick={() => {
                    mode === 'edit'&& (seatStatus === 'available' ||
                          seatStatus === 'selected') &&
                        updateSelectedSeats &&
                        updateSelectedSeats(seatNumber);
                }}
            />
        </Tooltip>
    ) : (
        <SeatWrapper className={`seat ${seatStatus}`}></SeatWrapper>
    );
};

export default Seat;
