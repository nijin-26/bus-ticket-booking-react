import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import { TicketWrapper } from './Ticket.styled';
import Barcode from 'react-barcode';
import { TwoLineHeading } from './components/TwoLineHeading';
import { ITicket } from '../../types';
import { formatDate } from './utils/timeUtils';
import { useTranslation } from 'react-i18next';

export const Ticket = ({ data }: { data: ITicket }) => {
    const isSmallScreen = useMediaQuery('(max-width:860px)');
    const isMediumScreen = useMediaQuery('(max-width:1024px)');
    const { t } = useTranslation('ticket');

    const { pnrNumber, trip, seats } = data;
    const { departureTimestamp, arrivalTimestamp } = trip;

    const adults = seats.filter((seat) => seat.passenger.age > 18);
    const children = seats.filter((seat) => seat.passenger.age < 18);

    return (
        <TicketWrapper>
            <Box>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <DirectionsBusRoundedIcon
                        fontSize="medium"
                        className="app-logo"
                    />
                    <Typography component={'h1'} variant="h2">
                        {t('ticket')}
                    </Typography>
                </Stack>
            </Box>
            <Stack
                direction={isSmallScreen ? 'column' : 'row'}
                spacing={'2rem'}
                flex={'2'}
                justifyContent={'space-between'}
            >
                <Stack
                    padding={'1.5rem'}
                    direction={'column'}
                    flex={'3'}
                    spacing={'2rem'}
                    justifyContent={'space-around'}
                >
                    <TwoLineHeading
                        title={t('passengerName')}
                        value={seats[0].passenger.fullName}
                    />
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row row-wrap"
                        spacing={isMediumScreen ? '0.5rem' : '0'}
                    >
                        <TwoLineHeading
                            title={t('from')}
                            value={`${trip.origin.name} - ${trip.origin.shortCode}`}
                        />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            className="row-wrap"
                        >
                            <TwoLineHeading
                                title={t('date')}
                                value={
                                    formatDate(departureTimestamp).formattedDate
                                }
                            />
                            <TwoLineHeading
                                title={t('time')}
                                value={
                                    formatDate(departureTimestamp).formattedTime
                                }
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row row-wrap"
                        spacing={isMediumScreen ? '0.5rem' : '0'}
                    >
                        <TwoLineHeading
                            title={t('to')}
                            value={`${trip.destination.name} - ${trip.destination.shortCode}`}
                        />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            className="row-wrap"
                        >
                            <TwoLineHeading
                                title={t('date')}
                                value={
                                    formatDate(arrivalTimestamp).formattedDate
                                }
                            />
                            <TwoLineHeading
                                title={t('time')}
                                value={
                                    formatDate(arrivalTimestamp).formattedTime
                                }
                            />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row row-wrap"
                        spacing={isMediumScreen ? '0.5rem' : '0'}
                    >
                        <TwoLineHeading
                            title={t('pnr')}
                            value={pnrNumber.toUpperCase()}
                        />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                            className="row-wrap"
                        >
                            <TwoLineHeading
                                title={t('passengerCount')}
                                value={`${
                                    adults.length > 0
                                        ? `${adults.length} ${
                                              adults.length > 1
                                                  ? 'adults'
                                                  : 'adult'
                                          }`
                                        : ''
                                }${
                                    adults.length > 0 && children.length > 0
                                        ? ' and '
                                        : ''
                                }${
                                    children.length > 0
                                        ? `${children.length} ${
                                              children.length > 1
                                                  ? 'children'
                                                  : 'child'
                                          }`
                                        : ''
                                }`}
                            />
                            <TwoLineHeading
                                title={`${t('seatNumber')}${
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
                        isSmallScreen && 'small-screen'
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
                            padding={'2rem'}
                            spacing={'1rem'}
                            justifyContent={'space-between'}
                            flex={'1.5'}
                        >
                            <TwoLineHeading
                                title={t('passengerName')}
                                value={seats[0].passenger.fullName}
                            />
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                            >
                                <TwoLineHeading
                                    title={t('from')}
                                    value={trip.origin.shortCode}
                                />
                                <TwoLineHeading
                                    title={t('to')}
                                    value={trip.destination.shortCode}
                                />
                            </Stack>
                            <TwoLineHeading
                                title={t('departure')}
                                value={formatDate(
                                    departureTimestamp,
                                    true
                                ).formattedDate.concat(
                                    ' ',
                                    formatDate(departureTimestamp).formattedTime
                                )}
                            />
                            <TwoLineHeading
                                title={t('arrival')}
                                value={formatDate(
                                    arrivalTimestamp,
                                    true
                                ).formattedDate.concat(
                                    ' ',
                                    formatDate(arrivalTimestamp).formattedTime
                                )}
                            />
                            <TwoLineHeading
                                title={`${t('seatNumber')}${
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
