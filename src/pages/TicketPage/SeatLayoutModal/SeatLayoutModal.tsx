import SeatLayout from '../../../components/BusLayout/SeatLayout/SeatLayout';
import { layoutNames } from '../../../components/BusLayout/SeatLayout/seatConfig';
import { ISeatStatus, ITicket } from '../../../types';
import { Overlay } from '../../../components/actionBar/pnrSearch/PnrSearch.styled';
import { Box } from '@mui/material';

export const SeatLayoutModal = ({
    cancelModal,
    ticketData,
}: {
    cancelModal: () => void;
    ticketData: ITicket;
}) => {
    return (
        <Overlay
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    cancelModal();
                }
            }}
        >
            <Box overflow={'auto'} height={'100%'} padding={'2rem'}>
                <SeatLayout
                    layoutName={layoutNames.volvo25}
                    seats={Array.from({ length: 46 }, (_, index) => {
                        const seatNumber = index + 1;
                        const selectedSeats = ticketData.seats.map(
                            (seat) => seat.seatNumber
                        );
                        const status = selectedSeats.includes(seatNumber)
                            ? ISeatStatus.SELECTED
                            : ISeatStatus.AVAILABLE;

                        return { seatNumber, status };
                    })}
                    selectedSeats={ticketData.seats.map(
                        (seat) => seat.seatNumber
                    )}
                    mode={'view'}
                />
            </Box>
        </Overlay>
    );
};
