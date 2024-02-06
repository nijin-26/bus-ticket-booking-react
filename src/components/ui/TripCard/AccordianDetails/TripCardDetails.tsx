import { AccordionDetails, IconButton, Stack } from '@mui/material';
import { DetailsGrid } from './DetailsGrid/DetailsGrid';
import SeatLayout from '../../../SeatLayout/SeatLayout';
import { useState } from 'react';
import { layoutNames, seats } from '../../../SeatLayout/seatConfig';
import { SeatLegend } from './SeatLegend/SeatLegend';
import { StyledAlert } from '../../../Alert/Alert.styled';
import { Checkout } from './Checkout/Checkout';
import { useTranslation } from 'react-i18next';
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
    const clearSelectedSeats = () => {
        setSelectedSeats([]);
    };

    const { t } = useTranslation('tripDetails');

    return (
        <AccordionDetails>
            <Stack direction={'column'} p={3} pt={0} spacing={4}>
                <Stack direction={'column'} spacing={2}>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        spacing={3}
                    >
                        <SeatLegend />
                        {selectedSeats.length <= 0 ? (
                            <StyledAlert variant="filled" severity="info">
                                {t('info')}
                            </StyledAlert>
                        ) : (
                            <StyledAlert
                                action={
                                    <IconButton
                                        aria-label="close"
                                        color="inherit"
                                        size="small"
                                        onClick={() => {
                                            clearSelectedSeats();
                                        }}
                                    >
                                        <CloseIcon fontSize="inherit" />
                                    </IconButton>
                                }
                                sx={{ mb: 2 }}
                            >
                                {'Seat' +
                                    (selectedSeats.length > 1 ? 's ' : ' ') +
                                    selectedSeats.join(', ') +
                                    ' are selected'}
                            </StyledAlert>
                        )}
                    </Stack>
                    <SeatLayout
                        layoutName={layoutNames.volvo25}
                        seats={seats}
                        selectedSeats={selectedSeats}
                        updateSelectedSeats={updateSelectedSeats}
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
