import { berthLayoutProducer, layoutConfig } from './seatConfig';
import SeatLayoutWrapper from './SeatLayout.styled';
import steeringWheel from '../../assets/tabler_steering-wheel.svg';
import { ISeat, ISeatStatus } from '../../api/types/trip';
import { useEffect, useState } from 'react';
import Seat from './Seat';

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
    const [berth, setBerth] = useState<{
        lowerBerth: number[][];
    }>({ lowerBerth: [] });
    let seatIndex = 0;

    useEffect(() => {
        setBerth((prev) => ({
            ...prev,
            lowerBerth: berthLayoutProducer(
                layoutConfig[layoutName].lowerBerth
            ),
        }));
    }, [layoutName]);

    return (
        <SeatLayoutWrapper>
            <div className="driver-cabin">
                <img
                    src={steeringWheel}
                    alt="steering icon"
                    className="steering"
                />
            </div>
            <div className="seats-container">
                {berth.lowerBerth.map((row: number[], rowIndex: number) => {
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
                                            <Seat
                                                seatNumber={
                                                    currentSeat.seatNumber
                                                }
                                                key={`seat${rowIndex}-${index}`}
                                                updateSelectedSeats={
                                                    updateSelectedSeats
                                                }
                                                seatStatus={'selected'}
                                            />
                                        ) : (
                                            <Seat
                                                seatNumber={
                                                    currentSeat.seatNumber
                                                }
                                                key={`seat${rowIndex}-${index}`}
                                                updateSelectedSeats={
                                                    updateSelectedSeats
                                                }
                                                seatStatus={'available'}
                                            />
                                        )
                                    ) : (
                                        <Seat
                                            seatNumber={currentSeat.seatNumber}
                                            key={`seat${rowIndex}-${index}`}
                                            seatStatus={'unavailable'}
                                        />
                                    );
                                } else {
                                    return (
                                        <Seat
                                            seatStatus={'aisle'}
                                            key={`seat${rowIndex}-${index}`}
                                        />
                                    );
                                }
                            })}
                        </ul>
                    );
                })}
            </div>
        </SeatLayoutWrapper>
    );
};

export default SeatLayout;
