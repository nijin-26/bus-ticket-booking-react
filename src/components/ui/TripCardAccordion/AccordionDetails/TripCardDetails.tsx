import { IconButton, Stack, Tooltip } from '@mui/material';
import { DetailsGrid } from './components/DetailsGrid';
import SeatLayout from '../../../SeatLayout/SeatLayout';
import { useState } from 'react';
import { generateSeats, layoutNames } from '../../../SeatLayout/seatConfig';
import { StyledAlert } from '../../../Alert/Alert.styled';
import { FareDetails } from '../../../FareDetails/FareDetails';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledButton } from '../../../Button/Button.styled';
import { paths } from '../../../../config';
import { TripCardDetailsWrapper } from './TripCardDetails.styled';
import { SeatLegend } from './components/SeatLegend/SeatLegend';
import { ISeat, ISeatStatus, ITrip } from '../../../../api/types/trip';
import { convertTimeStamp, filterSelectedSeats } from '../../../../utils';
import { useAppSelector, useAppDispatch } from '../../../../app/hooks';
import { setTripDetailsData } from '../../../../app/features/tripdetailsSlice';

interface ITripCardAccordionProps extends ITrip {
    seats?: ISeat[];
}
interface ITripCardDetailsProps {
    formattedDepartureTime: string;
    formattedDepartureDate: string;
    formattedArrivalTime: string;
    formattedArrivalDate: string;
    formattedDuration: string;
}

export const TripCardDetails = ({
    data,
}: {
    data: ITripCardAccordionProps;
}) => {
    const state = useAppSelector((state) => state.tripDetails);
    const dispatch = useAppDispatch();

    const { t } = useTranslation('tripDetails');
    const navigate = useNavigate();

    const dates: ITripCardDetailsProps = convertTimeStamp(
        data.departureTimestamp,
        data.arrivalTimestamp
    );
    const tripDetails = {
        departureTime: dates.formattedDepartureTime,
        departureDate: dates.formattedDepartureDate,
        arrivalTime: dates.formattedArrivalTime,
        arrivalDate: dates.formattedArrivalDate,
        duration: dates.formattedDuration,
        origin: data.origin,
        destination: data.destination,
        seatType: data.seatType,
        busType: data.busType,
    };

    /*
    if data has an undefined seats[], fetch call happens such that it gets the 
    seats, else takes the seats list from the data recieved.
    */
    const seatsData = !data.seats
        ? generateSeats(data.availableSeats, data.totalSeats)
        : data.seats;

    const currentUrl = useLocation();
    const seatsInStore =
        currentUrl.pathname === paths.tripBooking
            ? filterSelectedSeats(state.seats)
            : [];

    //selectign seats
    const [selectedSeats, setSelectedSeats] = useState<number[]>(seatsInStore);
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

    return (
        <TripCardDetailsWrapper>
            <Stack direction={'column'} p={3} pt={3}>
                <Stack direction={'column'} spacing={2}>
                    <Stack
                        direction={{ sm: 'column', md: 'row' }}
                        justifyContent={'space-between'}
                        alignItems={{ sm: 'space-between', md: 'center' }}
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
                        seats={seatsData}
                        selectedSeats={selectedSeats}
                        updateSelectedSeats={updateSelectedSeats}
                    />
                </Stack>
                {currentUrl.pathname === paths.tripsListing && (
                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        justifyContent={'space-between'}
                        spacing={{ xs: 1, sm: 10 }}
                        mt={5}
                        className="checkout-section"
                    >
                        {selectedSeats.length > 0 && data.farePerSeat > 0 && (
                            <FareDetails
                                noOfSeats={selectedSeats.length}
                                farePerSeat={data.farePerSeat}
                            />
                        )}
                        <StyledButton
                            variant="contained"
                            disabled={
                                !(
                                    selectedSeats.length > 0 &&
                                    data.farePerSeat > 0
                                )
                            }
                            onClick={() => {
                                //update store with tripdetails
                                seatsData.forEach((seat) => {
                                    if (
                                        selectedSeats.includes(
                                            seat.seatNumber
                                        )
                                    ) {
                                        seat.status = ISeatStatus.SELECTED;
                                    }
                                });

                                dispatch(
                                    setTripDetailsData({
                                        ...data,
                                        seats: seatsData,
                                    })
                                );
                                navigate('/trips/bookings');
                            }}
                        >
                            {t('checkoutBtnTxt')}
                        </StyledButton>
                    </Stack>
                )}
                <DetailsGrid tripDetails={tripDetails} />
            </Stack>
        </TripCardDetailsWrapper>
    );
};
