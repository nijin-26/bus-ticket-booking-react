import { ISeatStatus } from "../../../types";

const getSeatStatus = (
    currentSeat: { seatNumber: number; status: ISeatStatus },
    selectedSeats: number[]
) => {
    switch (currentSeat.status) {
        case ISeatStatus.AVAILABLE:
            if (selectedSeats.includes(currentSeat.seatNumber)) {
                return 'selected';
            } else {
                return 'available';
            }
        case ISeatStatus.SELECTED:
            return 'selected';
        case ISeatStatus.BOOKED:
            return 'unavailable';
    }
};

export default getSeatStatus;
