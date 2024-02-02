import { useState } from 'react';
import { LandingPageWrapper } from './LandingPage.styled';
import SeatLayout from '../../components/SeatLayout/SeatLayout';
import { layoutNames, seats } from '../../components/SeatLayout/seatConfig';

export const LandingPage = () => {
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

    const updateSelectedSeats = (newSeat: number) => {
        if (selectedSeats.includes(newSeat)) {
            setSelectedSeats((prev) =>
                prev.filter((selectedSeat) => selectedSeat != newSeat)
            );
        } else setSelectedSeats((prev) => [...prev, newSeat]);
    };

    return (
        <LandingPageWrapper>
            <h1>LandingPage</h1>
            <SeatLayout
                layoutName={layoutNames.volvo25}
                seats={seats}
                selectedSeats={selectedSeats}
                updateSelectedSeats={updateSelectedSeats}
            />
        </LandingPageWrapper>
    );
};
