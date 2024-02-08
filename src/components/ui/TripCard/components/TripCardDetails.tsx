import { IconButton, Stack, Tooltip } from '@mui/material';
import SeatLayout from '../../../SeatLayout/SeatLayout';
import { useState } from 'react';
import { layoutNames, seats } from '../../../SeatLayout/seatConfig';
import { StyledAlert } from '../../../Alert/Alert.styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { StyledButton } from '../../../Button/Button.styled';
import { paths } from '../../../../config';
import { TripCardDetailsWrapper } from '../../TripCardAccordion/AccordionDetails/TripCardDetails.styled';
import { Checkout } from '../../TripCardAccordion/AccordionDetails/components/FareDetails';
import { DetailsGrid } from '../../TripCardAccordion/AccordionDetails/components/DetailsGrid';
import { SeatLegend } from '../../TripCardAccordion/AccordionDetails/components/SeatLegend/SeatLegend';

export const TripCardDetails = () => {
    const farePerSeat: number = 1200;

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
    const currentUrl = useLocation();

    return (
        <TripCardDetailsWrapper>
            <Stack direction={'column'} p={3} pt={3}>
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
                                    <Tooltip title="Delete selection" arrow>
                                        <IconButton
                                            aria-label="delete"
                                            color="inherit"
                                            size="small"
                                            onClick={() => {
                                                clearSelectedSeats();
                                            }}
                                        >
                                            <DeleteForeverIcon fontSize="inherit" />
                                        </IconButton>
                                    </Tooltip>
                                }
                                sx={{ mb: 2 }}
                            >
                                {t('selectAlertTitle')}
                                {selectedSeats.length > 1 ? 's' : ''}{' '}
                                {selectedSeats.join(', ')} {t('selectAlertMsg')}
                            </StyledAlert>
                        )}
                    </Stack>
                    <SeatLayout
                        layoutName={layoutNames.volvo25}
                        seats={seats}
                        selectedSeats={selectedSeats}
                        updateSelectedSeats={updateSelectedSeats}
                    />
                </Stack>
                <Stack
                    direction={'row'}
                    justifyContent={'space-between'}
                    alignItems={'center'}
                    spacing={3}
                    mt={5}
                    className="checkout-section"
                >
                    <Checkout
                        noOfSeats={selectedSeats.length}
                        farePerSeat={farePerSeat}
                    />
                    {currentUrl.pathname !== paths.tripBooking && (
                        <StyledButton
                            variant="contained"
                            disabled={
                                !(selectedSeats.length > 0 && farePerSeat > 0)
                            }
                        >
                            {t('checkoutBtnTxt')}
                        </StyledButton>
                    )}
                </Stack>
                <DetailsGrid></DetailsGrid>
            </Stack>
        </TripCardDetailsWrapper>
    );
};
