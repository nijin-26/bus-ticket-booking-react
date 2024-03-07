import { Tooltip, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import SeatWrapper from './Seat.styled';

const Seat = ({
    seatNumber,
    seatStatus,
    updateSelectedSeats,
    mode,
    seatSize,
}: {
    seatNumber?: number;
    seatStatus: 'available' | 'unavailable' | 'selected' | 'aisle';
    updateSelectedSeats?: (seatNumber: number) => void;
    mode: 'view' | 'edit';
    seatSize: 'small' | 'medium' | 'large';
}) => {
    const { t } = useTranslation('seatLayout');
    return seatNumber ? (
        <Tooltip
            title={t(seatStatus as 'available' | 'unavailable' | 'selected')}
            arrow
        >
            <SeatWrapper
                className={`seat ${seatSize} ${seatStatus} ${
                    mode === 'view'
                        ? 'disable-click'
                        : seatStatus === 'available' ||
                          seatStatus === 'selected'
                        ? 'cursor-pointer'
                        : 'disable-click'
                }`}
                onClick={() => {
                    mode === 'edit' &&
                        (seatStatus === 'available' ||
                            seatStatus === 'selected') &&
                        updateSelectedSeats &&
                        updateSelectedSeats(seatNumber);
                }}
            >
                <Typography color={'black'}>{seatNumber}</Typography>
            </SeatWrapper>
        </Tooltip>
    ) : (
        <SeatWrapper className={`seat ${seatSize} ${seatStatus}`}></SeatWrapper>
    );
};

export default Seat;
