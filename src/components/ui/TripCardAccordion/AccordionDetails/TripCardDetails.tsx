import { IconButton, Stack, Tooltip } from '@mui/material';
import { DetailsGrid } from './components/DetailsGrid';
import SeatLayout from '../../../SeatLayout/SeatLayout';
import { useEffect, useState } from 'react';
import { layoutNames } from '../../../SeatLayout/seatConfig';
import { StyledAlert } from '../../../Alert/Alert.styled';
import { FareDetails } from '../../../FareDetails/FareDetails';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { StyledButton } from '../../../Button/Button.styled';
import { paths } from '../../../../config';
import { TripCardDetailsWrapper } from './TripCardDetails.styled';
import { SeatLegend } from './components/SeatLegend/SeatLegend';
import {
    ISeat,
    ISeatStatus,
    ITrip,
    ITripDetailResponse,
} from '../../../../api/types/trip';
import { convertTimeStamp, filterSelectedSeats } from '../../../../utils';
import { useAppDispatch } from '../../../../app/hooks';
import { setTripDetailsData } from '../../../../app/features/tripdetailsSlice';
import { getTrip } from '../../../../api';

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
    const { t } = useTranslation('tripDetails');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const currentUrl = useLocation();

    const [loading, setLoading] = useState<boolean>(true);
    const [tripSpecificData, setTripSpecificData] =
        useState<ITripDetailResponse>({ ...data, seats: [] });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getTrip('1');
                if (response) {
                    setTripSpecificData(response);
                } else {
                    console.log('Trip data not available');
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        if (currentUrl.pathname === paths.tripsListing || !data.seats) {
            void fetchData();
        } else {
            setTripSpecificData({ ...data, seats: data.seats });
            setLoading(false);
        }
    }, [currentUrl.pathname, data]);

    const {
        seats,
        departureTimestamp,
        arrivalTimestamp,
        origin,
        destination,
        seatType,
        busType,
    } = tripSpecificData;

    const dates: ITripCardDetailsProps = convertTimeStamp(
        departureTimestamp,
        arrivalTimestamp
    );

    const tripDetails = {
        departureTime: dates.formattedDepartureTime,
        departureDate: dates.formattedDepartureDate,
        arrivalTime: dates.formattedArrivalTime,
        arrivalDate: dates.formattedArrivalDate,
        duration: dates.formattedDuration,
        origin,
        destination,
        seatType,
        busType,
    };

    const seatsInStore =
        currentUrl.pathname === paths.tripBooking
            ? filterSelectedSeats(seats)
            : [];

    // Selecting seats
    const [selectedSeats, setSelectedSeats] = useState<number[]>(seatsInStore);

    const updateSelectedSeats = (newSeat: number) => {
        setSelectedSeats((prev) =>
            prev.includes(newSeat)
                ? prev.filter((selectedSeat) => selectedSeat !== newSeat)
                : [...prev, newSeat]
        );
    };

    const clearSelectedSeats = () => {
        setSelectedSeats([]);
    };

    if (loading) {
        return <>Loading...</>; // Display loader while loading is true
    }

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
                        seats={seats}
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
                                seats.forEach((seat) => {
                                    if (
                                        selectedSeats.includes(seat.seatNumber)
                                    ) {
                                        seat.status = ISeatStatus.SELECTED;
                                    }
                                });

                                dispatch(
                                    setTripDetailsData({
                                        ...data,
                                        seats
                                    })
                                );
                                navigate(paths.tripBooking);
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
