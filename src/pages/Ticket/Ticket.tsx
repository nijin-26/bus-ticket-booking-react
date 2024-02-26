import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import { TicketWrapper } from './Ticket.styled';
import Barcode from 'react-barcode';
import { TwoLineHeading } from './components/TwoLineHeading';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ITicket } from '../../types';

const formatDate = (timestamp: Date, short: boolean = false) => {
    const formatOptions = {
        month: short ? 'short' : '2-digit',
        day: '2-digit',
    };

    const formattedDate = timestamp.toLocaleDateString('en-US', formatOptions);
    const formattedTime = timestamp.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    });

    return { formattedDate, formattedTime };
};

export const Ticket = () => {
    const isSmallScreen = useMediaQuery('(max-width:860px)');
    const isMediumScreen = useMediaQuery('(max-width:1024px)');

    const location = useLocation();
    // TODO: Fetch ticket data if state not sent 
    const ticketDataFromState: ITicket = location.state as ITicket;
    const [ticketData, setTicketData] = useState<ITicket>(ticketDataFromState);

    const { pnrNumber, trip, seats } = ticketDataFromState;
    const { departureTimestamp, arrivalTimestamp } = trip;

    const { formattedDate: departureDate, formattedTime: departureTime } =
        formatDate(departureTimestamp);
    const { formattedDate: arrivalDate, formattedTime: arrivalTime } =
        formatDate(arrivalTimestamp);

    const shortDepartureDate = formatDate(
        departureTimestamp,
        true
    ).formattedDate;
    const shortArrivalDate = formatDate(arrivalTimestamp, true).formattedDate;

    const [loading, setLoading] = useState<boolean>(true);

    return (
        <TicketWrapper>
            <Box>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <DirectionsBusRoundedIcon
                        fontSize="medium"
                        className="app-logo"
                        color="secondary"
                    />
                    <Typography component={'h1'} variant="h2">
                        TICKET
                    </Typography>
                </Stack>
            </Box>
            <Stack
                direction={isSmallScreen ? 'column' : 'row'}
                spacing={'20px'}
                flex={'2'}
                justifyContent={'space-between'}
            >
                <Stack
                    padding={'15px'}
                    direction={'column'}
                    flex={'3'}
                    spacing={'20px'}
                    justifyContent={'space-around'}
                >
                    <TwoLineHeading
                        title="Passenger Name"
                        value={seats[0].passenger.fullName}
                    />
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row"
                        spacing={isMediumScreen ? '5px' : '0'}
                    >
                        <TwoLineHeading
                            title="FROM"
                            value={`${trip.origin.name} - ${trip.origin.shortCode}`}
                        />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                        >
                            <TwoLineHeading
                                title="Date"
                                value={departureDate}
                            />
                            <TwoLineHeading
                                title="tIME"
                                value={departureTime}
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row"
                        spacing={isMediumScreen ? '5px' : '0'}
                    >
                        <TwoLineHeading
                            title="To"
                            value={`${trip.destination.name} - ${trip.destination.shortCode}`}
                        />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                        >
                            <TwoLineHeading title="Date" value={arrivalDate} />
                            <TwoLineHeading title="tIME" value={arrivalTime} />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row"
                        spacing={isMediumScreen ? '5px' : '0'}
                    >
                        <TwoLineHeading
                            title="PNR"
                            value={pnrNumber.toUpperCase()}
                        />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                        >
                            <TwoLineHeading
                                title="Passenger Count"
                                value={`${seats.length} adults`}
                            />
                            <TwoLineHeading
                                title={`Seat Number${
                                    seats.length > 1 ? 's' : ''
                                }`}
                                value={seats
                                    .map((seat) => seat.seatNumber)
                                    .join(', ')}
                            />
                        </Stack>
                    </Stack>
                </Stack>
                <Box
                    component="div"
                    className={`rotated-barcode-container ${
                        isSmallScreen ? 'small-screen' : ''
                    }`}
                    flex={'1'}
                >
                    <Barcode value={pnrNumber} format="CODE128" />
                    {/* high-density linear barcode. supports all 128 ASCII characters */}
                </Box>
                {!isSmallScreen && (
                    <>
                        <div className="dotted-vertical-div"></div>
                        <Stack
                            direction={'column'}
                            padding={'20px'}
                            spacing={'10px'}
                            justifyContent={'space-between'}
                            flex={'1.5'}
                        >
                            <TwoLineHeading
                                title="Passenger Name"
                                value={seats[0].passenger.fullName}
                            />
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                            >
                                <TwoLineHeading
                                    title="FROM"
                                    value={trip.origin.shortCode}
                                />
                                <TwoLineHeading
                                    title="To"
                                    value={trip.destination.shortCode}
                                />
                            </Stack>
                            <TwoLineHeading
                                title="Departure"
                                value={shortDepartureDate.concat(
                                    ' ',
                                    departureTime
                                )}
                            />
                            <TwoLineHeading
                                title="Arrival"
                                value={shortArrivalDate.concat(
                                    ' ',
                                    arrivalTime
                                )}
                            />
                            <TwoLineHeading
                                title={`Seat Number${
                                    seats.length > 1 ? 's' : ''
                                }`}
                                value={seats
                                    .map((seat) => seat.seatNumber)
                                    .join(', ')}
                            />
                        </Stack>
                    </>
                )}
            </Stack>
            <Box></Box>
        </TicketWrapper>
    );
};
