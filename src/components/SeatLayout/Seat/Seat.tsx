import { Tooltip, Typography, useMediaQuery } from '@mui/material';
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
    const isExtraLargeScreen = useMediaQuery(`(min-width:61rem)`);
    const isLargeScreen = useMediaQuery(`(min-width:54rem)`);
    const seatSize = isExtraLargeScreen
        ? 'large-size-seat'
        : isLargeScreen
        ? 'mid-size-seat'
        : 'small-size-seat';
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
