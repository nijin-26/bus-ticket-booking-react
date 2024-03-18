import { berthLayoutProducer, layoutConfig } from './seatConfig';
import SeatLayoutWrapper from './SeatLayout.styled';
import steeringWheel from '../../../assets/tabler_steering-wheel.svg';
import { useEffect, useState } from 'react';
import { ISeat } from '../../../types';
import getSeatStatus from '../utils/getSeatStatus';
import Seat from '../Seat/Seat';
import { useMediaQuery } from '@mui/material';
import Window from '../Window.styled';

const SeatLayout = ({
    layoutName,
    seats,
    selectedSeats,
    mode,
    updateSelectedSeats,
}: {
    layoutName: string;
    seats: ISeat[];
    selectedSeats: number[];
    mode: 'view' | 'edit';
    updateSelectedSeats?: (seat: number) => void;
}) => {
    const [berth, setBerth] = useState<{
        lowerBerth: {
            seatPosition: (string | number)[][];
            tyrePosition: number[];
        };
    }>({ lowerBerth: { seatPosition: [], tyrePosition: [] } });
    let seatIndex = 0;

    const isSmallScreen = useMediaQuery(`(max-width:50rem)`);
    const isExtraLargeScreen = useMediaQuery(`(min-width:61rem)`);
    const isLargeScreen = useMediaQuery(`(min-width:54rem)`);
    const seatSize =
        isSmallScreen || isExtraLargeScreen
            ? 'large'
            : isLargeScreen
            ? 'medium'
            : 'small';

    useEffect(() => {
        setBerth((prev) => ({
            ...prev,
            lowerBerth: berthLayoutProducer(
                layoutConfig[layoutName].lowerBerth
            ),
        }));
    }, [layoutName]);

    return (
        <SeatLayoutWrapper isVerticalOrientation={isSmallScreen}>
            <ul className="head-lights-container">
                <li className="head-light"></li>
                <li className="head-light"></li>
            </ul>
            <div className="driver-cabin">
                <img
                    src={steeringWheel}
                    alt="steering icon"
                    className="steering"
                />
            </div>
            <div className="seats-container">
                {berth.lowerBerth.seatPosition.map(
                    (row: (string | number)[], rowIndex: number) => {
                        return (
                            <ul className="seat-row" key={`seatRow${rowIndex}`}>
                                {row.map(
                                    (seat: string | number, index: number) => {
                                        if (
                                            index === 0 ||
                                            index === row.length - 1
                                        ) {
                                            return (
                                                <Window
                                                    className={`${
                                                        seat === 'window'
                                                            ? index === 0
                                                                ? 'right-window'
                                                                : 'left-window'
                                                            : 'no-window'
                                                    } ${seatSize}`}
                                                    key={`left-window${rowIndex}-${index}`}
                                                    isVerticalOrientation={
                                                        isSmallScreen
                                                    }
                                                />
                                            );
                                        } else {
                                            if (seat === 1) {
                                                const currentSeat =
                                                    seats[seatIndex];
                                                const seatStatus =
                                                    getSeatStatus(
                                                        currentSeat,
                                                        selectedSeats
                                                    );
                                                seatIndex++;
                                                return (
                                                    <Seat
                                                        seatNumber={
                                                            currentSeat.seatNumber
                                                        }
                                                        key={`seat${rowIndex}-${index}`}
                                                        updateSelectedSeats={
                                                            updateSelectedSeats
                                                        }
                                                        seatStatus={seatStatus}
                                                        mode={mode}
                                                        seatSize={seatSize}
                                                    />
                                                );
                                            } else {
                                                return (
                                                    <Seat
                                                        seatStatus={'aisle'}
                                                        key={`seat${rowIndex}-${index}`}
                                                        mode={mode}
                                                        seatSize={seatSize}
                                                    />
                                                );
                                            }
                                        }
                                    }
                                )}
                            </ul>
                        );
                    }
                )}
            </div>
            <ul className="brake-lights-container">
                <li className="brake-light"></li>
                <li className="brake-light"></li>
            </ul>
        </SeatLayoutWrapper>
    );
};

export default SeatLayout;
