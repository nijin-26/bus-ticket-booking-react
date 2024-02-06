import { AccordionDetails, Stack } from '@mui/material';
import { DetailsGrid } from './DetailsGrid/DetailsGrid';
import SeatLayout from '../../../SeatLayout/SeatLayout';
import { useState } from 'react';
import { layoutNames, seats } from '../../../SeatLayout/seatConfig';
import { SeatLegend } from './SeatLegend/SeatLegend';
import { StyledAlert } from '../../../Alert/Alert.styled';
import { Checkout } from './Checkout/Checkout';

export const TripCardDetails = () => {
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

    const updateSelectedSeats = (newSeat: number) => {
        if (selectedSeats.includes(newSeat)) {
            setSelectedSeats((prev) =>
                prev.filter((selectedSeat) => selectedSeat != newSeat)
            );
        } else setSelectedSeats((prev) => [...prev, newSeat]);
    };
    const seatSelectionObj = { selectedSeats, setSelectedSeats };

    return (
        <AccordionDetails>
            <Stack direction={'column'} p={3} pt={0} spacing={4}>
                <Stack direction={'column'} spacing={2}>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <SeatLegend />
                        <StyledAlert variant="filled" severity="info">
                            Click the close icon to see the Collapse transition
                            in action!
                        </StyledAlert>
                    </Stack>
                    <SeatLayout
                        layoutName={layoutNames.volvo25}
                        seats={seats}
                        selectedSeats={selectedSeats}
                        updateSelectedSeats={updateSelectedSeats}
                        seatSelectionObj ={seatSelectionObj}
                    />
                    <Checkout
                        noOfSeats={selectedSeats.length}
                        farePerSeat={1200}
                    />
                </Stack>
                <DetailsGrid></DetailsGrid>
            </Stack>
        </AccordionDetails>
    );
};
