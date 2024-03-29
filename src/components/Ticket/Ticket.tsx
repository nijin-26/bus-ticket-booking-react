import { Box, Button, Stack, Typography } from '@mui/material';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import { TicketWrapper } from './Ticket.styled';
import Barcode from 'react-barcode';
import { TwoLineHeading } from './components/TwoLineHeading';
import { ITicket, ITicketStatus } from '../../types';
import { formatDate } from './utils/timeUtils';
import { useTranslation } from 'react-i18next';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Home } from '@mui/icons-material';
import { paths } from '../../config';
import { useNavigate } from 'react-router-dom';

export const Ticket = ({ data }: { data: ITicket }) => {
    const { t } = useTranslation('ticket');

    const { pnrNumber, trip, seats, status } = data;
    const { departureTimestamp, arrivalTimestamp } = trip;

    const adults = seats.filter((seat) => seat.passenger.age > 18);
    const children = seats.filter((seat) => seat.passenger.age < 18);
    const navigate = useNavigate();

    const downloadAsPDF = () => {
        const input = document.getElementById('ticket');


        if (input) {
            const { offsetWidth, offsetHeight } = input;

            void html2canvas(input).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = 210; // A4 paper width in millimeters
                const pdfHeight = (offsetHeight * pdfWidth) / offsetWidth;
                const margin = 10; // Set your desired margin size in millimeters

                // Add margin to the top and left
                pdf.addImage(
                    imgData,
                    'PNG',
                    margin,
                    margin,
                    pdfWidth - 2 * margin,
                    pdfHeight - 2 * margin
                );

                pdf.save('ticket.pdf');
            });
        }
    };

    const goHomeHandler = () => {
        navigate(paths.home);
    };

    return (
        <Stack>
            <TicketWrapper id="ticket">
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
                    direction={'row'}
                    spacing={'2rem'}
                    flex={'2'}
                    justifyContent={'space-between'}
                >
                    <Stack
                        direction={'row'}
                        spacing={'2rem'}
                        flex={'2'}
                        className={'barcode-row'}
                        justifyContent={'space-between'}
                    >
                        <Stack
                            padding={'1.5rem'}
                            direction={'column'}
                            flex={'3'}
                            className={'details-column'}
                            spacing={'2rem'}
                            justifyContent={'space-around'}
                        >
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                                className="row-wrap"
                            >
                                <TwoLineHeading
                                    title={t('passengerName')}
                                    value={seats[0].passenger.fullName}
                                />
                                <TwoLineHeading
                                    title={t('status')}
                                    value={
                                        status === ITicketStatus.CONFIRMED
                                            ? t('confirmed')
                                            : t('cancelled')
                                    }
                                />
                            </Stack>

                            <Stack
                                direction={'column'}
                                justifyContent={'space-between'}
                                className="details-row row-wrap"
                                spacing="0.5rem"
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
                                            formatDate(departureTimestamp)
                                                .formattedDate
                                        }
                                    />
                                    <TwoLineHeading
                                        title={t('time')}
                                        value={
                                            formatDate(departureTimestamp)
                                                .formattedTime
                                        }
                                    />
                                </Stack>
                            </Stack>
                            <Stack
                                direction={'column'}
                                justifyContent={'space-between'}
                                className="details-row row-wrap"
                                spacing={'0.5rem'}
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
                                            formatDate(arrivalTimestamp)
                                                .formattedDate
                                        }
                                    />
                                    <TwoLineHeading
                                        title={t('time')}
                                        value={
                                            formatDate(arrivalTimestamp)
                                                .formattedTime
                                        }
                                    />
                                </Stack>
                            </Stack>
                            <Stack
                                direction={'column'}
                                justifyContent={'space-between'}
                                className="details-row row-wrap"
                                spacing={'0.5rem'}
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
                                            adults.length > 0 &&
                                            children.length > 0
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
                                        title={`${String(t('seatNumber'))}${
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
                            className={`rotated-barcode-container`}
                            flex={'1'}
                        >
                            <Barcode value={pnrNumber} format="CODE128" />
                            {/* high-density linear barcode. supports all 128 ASCII characters */}
                        </Box>
                    </Stack>

                    <>
                        <div className="dotted-vertical-div"></div>
                        <Stack
                            direction={'column'}
                            padding={'2rem'}
                            spacing={'1rem'}
                            className={'tearsheet-column'}
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
                                title={`${String(t('seatNumber'))}${
                                    seats.length > 1 ? 's' : ''
                                }`}
                                value={seats
                                    .map((seat) => seat.seatNumber)
                                    .join(', ')}
                            />
                        </Stack>
                    </>
                </Stack>
                <Box></Box>
            </TicketWrapper>
            <Stack
                direction={'row'}
                justifyContent={'center'}
                padding={'2rem'}
                gap={'2rem'}
            >
            <Button
                variant="contained"
                onClick={() => {
                    downloadAsPDF();
                }}
                startIcon={<Download />}
                sx={{
                    margin: '2rem 0',
                    alignSelf: 'center',
                    textTransform: 'none',
                }}
            >
                {t('downloadTicket')}
            </Button>
            <Button
                variant="contained"
                onClick={goHomeHandler}
                startIcon={<Home />}
                sx={{
                    margin: '2rem 0',
                    alignSelf: 'center',
                    textTransform: 'none',
                    maxWidth: '20rem',
                }}
            >
                {t('goHome')}
            </Button>
            </Stack>
        </Stack>
    );
};
