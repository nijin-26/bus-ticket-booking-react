import { useState } from 'react';
import { LandingPageWrapper } from './LandingPage.styled';
import { layoutNames, seats } from '../../components/SeatLayout/seatConfig';
import SeatLayout from '../../components/SeatLayout/SeatLayout';

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
            <ActionBarTab />
            <>jajjajaja</>
            <ActionBarTab showFilterSort />
        </LandingPageWrapper>
    );
};
