import { AccordionDetails, Alert, IconButton, Stack } from '@mui/material';
import { DetailsGrid } from './DetailsGrid/DetailsGrid';
import SeatLayout from '../../../SeatLayout/SeatLayout';
import { useState } from 'react';
import { layoutNames, seats } from '../../../SeatLayout/seatConfig';
import { SeatLegend } from './SeatLegend/SeatLegend';
import CloseIcon from '@mui/icons-material/Close';

export const TripCardDetails = () => {
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

    const updateSelectedSeats = (newSeat: number) => {
        if (selectedSeats.includes(newSeat)) {
            setSelectedSeats((prev) =>
                prev.filter((selectedSeat) => selectedSeat != newSeat)
            );
        } else setSelectedSeats((prev) => [...prev, newSeat]);
    };
    return (
        <AccordionDetails>
            <Stack p={1.6} spacing={5}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <SeatLegend />
                    <Alert
                        action={
                            <IconButton
                                aria-label="close"
                                color="inherit"
                                size="small"
                                onClick={() => {
                                }}
                            >
                                <CloseIcon fontSize="inherit" />
                            </IconButton>
                        }
                        sx={{ mb: 2 }}
                    >
                        Click the close icon to see the Collapse transition in
                        action!
                    </Alert>
                </Stack>
                <SeatLayout
                    layoutName={layoutNames.volvo25}
                    seats={seats}
                    selectedSeats={selectedSeats}
                    updateSelectedSeats={updateSelectedSeats}
                />
                <DetailsGrid></DetailsGrid>
            </Stack>
        </AccordionDetails>
    );
};
