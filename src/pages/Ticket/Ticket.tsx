import { Box, Stack, Typography } from '@mui/material';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import busPlaceholder from '../../assets/bus-ticket.svg';
import { TicketWrapper } from './Ticket.styled';
import Barcode from 'react-barcode';

export const Ticket = () => {
    return (
        <TicketWrapper>
            <Stack direction={'row'} spacing={4}>
                <Box
                    component="div"
                    sx={{
                        height: 400,
                        minWidth: 450,
                    }}
                >
                    <Box
                        component="img"
                        p={5}
                        sx={{
                            height: '100%',
                            width: '100%',
                            objectFit: 'cover', // Ensure the image covers the entire box
                        }}
                        alt="Bus Placeholder."
                        src={busPlaceholder}
                    />
                </Box>
                <div className="dotted-vertical-div"></div>
                <Stack
                    direction={'column'}
                    alignItems={'flex-start'}
                    p={3}
                    spacing={3}
                    justifyContent={'space-evenly'}
                    minWidth={450}
                    flexWrap={'wrap'}
                >
                    <Stack
                        direction={'row'}
                        spacing={5}
                        alignItems="center"
                        justifyContent="center"
                        width={'100%'}
                    >
                        <Stack direction={'column'} alignItems={'flex-start'}>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="time-details"
                            >
                                FROM :
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="location-short-name"
                            >
                                TRV
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="location-full-name"
                            >
                                Trivandrum
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="time-details"
                            >
                                Jan 07, 2024
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="time-details"
                            >
                                10:40 am
                            </Typography>
                        </Stack>
                        <div className="dotted-div">
                            <DirectionsBusRoundedIcon
                                fontSize="large"
                                className="app-logo"
                            />
                        </div>
                        <Stack direction={'column'} alignItems={'flex-start'}>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="time-details"
                            >
                                TO :
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="location-short-name"
                            >
                                BLR
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="location-full-name"
                            >
                                Banglore
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="time-details"
                            >
                                Jan 07, 2024
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="time-details"
                            >
                                10:40 am
                            </Typography>
                        </Stack>
                    </Stack>
                    <Stack direction={'row'} spacing={5} width={'100%'}>
                        <Stack
                            direction={'column'}
                            width={`calc((100% - ${2 * 3}px - 4 * 5px)/3)`}
                            alignItems={'flex-start'}
                        >
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="title"
                            >
                                PNR Number
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="subtitle "
                            >
                                123456789
                            </Typography>
                        </Stack>
                        <Stack
                            direction={'column'}
                            width={`calc((100% - ${2 * 3}px - 4 * 5px)/3)`}
                            alignItems={'flex-start'}
                        >
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="title"
                            >
                                Passenger
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="subtitle"
                            >
                                3 adults
                            </Typography>
                        </Stack>
                        <Stack
                            direction={'column'}
                            width={`calc((100% - ${2 * 3}px - 4 * 5px)/3)`}
                            alignItems={'flex-start'}
                        >
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="title"
                            >
                                Seat Numbers
                            </Typography>
                            <Typography
                                variant="body2"
                                textAlign="center"
                                className="subtitle"
                            >
                                26A, 34B, 35B
                            </Typography>
                        </Stack>
                    </Stack>
                </Stack>
                <div className="dotted-vertical-div"></div>

                <Box
                    component="div"
                    className="rotated-barcode-container"
                >
                    <Barcode value={'123456789'} format="CODE128" />
                    {/* high-density linear barcode. supports all 128 ASCII characters */}
                </Box>
            </Stack>
        </TicketWrapper>
    );
};
