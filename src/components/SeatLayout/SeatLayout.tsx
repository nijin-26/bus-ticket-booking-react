import { deckLayoutProducer, layoutConfig } from './seatConfig';
import SeatLayoutWrapper from './seatLayout.style';
import driverSeat from '../../assets/tabler_steering-wheel.svg';
import { ISeat, ISeatStatus } from '../../api/types/trip';
import { Tooltip } from '@mui/material';
import { useEffect, useState } from 'react';

const SeatLayout = ({
    layoutName,
    seats,
    selectedSeats,
    updateSelectedSeats,
}: {
    layoutName: string;
    seats: ISeat[];
    selectedSeats: number[];
    updateSelectedSeats: (seat: number) => void;
}) => {
    const [deck, setDeck] = useState<{
        lowerDeck: number[][];
    }>({ lowerDeck: [] });

    let seatIndex = 0;

    useEffect(() => {
        setDeck((prev) => ({
            ...prev,
            lowerDeck: deckLayoutProducer(layoutConfig[layoutName].lowerDeck),
        }));
    }, []);

    return (
        <SeatLayoutWrapper>
            <img src={driverSeat} alt="driver seat" className="driver" />
            <div className="line"></div>
            {deck.lowerDeck.map((row: number[], rowIndex: number) => {
                return (
                    <ul className="seat-row" key={`seatRow${rowIndex}`}>
                        {row.map((seat: number, index: number) => {
                            if (seat === 1) {
                                const currentSeat = seats[seatIndex];
                                seatIndex++;
                                return currentSeat.status.toString() ===
                                    ISeatStatus.AVAILABLE.toString() ? (
                                    selectedSeats.includes(
                                        currentSeat.seatNumber
                                    ) ? (
                                        <Tooltip
                                            title={`${currentSeat.seatNumber}: Selected`}
                                            arrow
                                            key={`seat${rowIndex}_${index}`}
                                        >
                                            <li
                                                className={`seat selected`}
                                                onClick={() => {
                                                    updateSelectedSeats(
                                                        currentSeat.seatNumber
                                                    );
                                                }}
                                            >
                                                {currentSeat.seatNumber}
                                            </li>
                                        </Tooltip>
                                    ) : (
                                        <Tooltip
                                            title={`${currentSeat.seatNumber}: Unbooked`}
                                            arrow
                                            key={`seat${rowIndex}_${index}`}
                                        >
                                            <li
                                                className={`seat`}
                                                onClick={() => {
                                                    updateSelectedSeats(
                                                        currentSeat.seatNumber
                                                    );
                                                }}
                                            >
                                                {currentSeat.seatNumber}
                                            </li>
                                        </Tooltip>
                                    )
                                ) : (
                                    <Tooltip
                                        title={`${currentSeat.seatNumber}: Booked`}
                                        arrow
                                        key={`seat${rowIndex}_${index}`}
                                    >
                                        <li className={`seat booked`}>
                                            {currentSeat.seatNumber}
                                        </li>
                                    </Tooltip>
                                );
                            } else {
                                return (
                                    <li
                                        className="seat hide-seat"
                                        key={`seat${rowIndex}_${index}`}
                                    ></li>
                                );
                            }
                        })}
                    </ul>
                );
            })}
        </SeatLayoutWrapper>
    );
};

export default SeatLayout;
