import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import { TicketWrapper } from './Ticket.styled';
import Barcode from 'react-barcode';
import { TwoLineHeading } from './components/TwoLineHeading';
import { useState } from 'react';

export const Ticket = () => {
    const isSmallScreen = useMediaQuery('(max-width:860px)');
    const isMediumScreen = useMediaQuery('(max-width:1024px)');

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
                    <TwoLineHeading title="Passenger Name" value="John Smith" />
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row"
                        spacing={isMediumScreen ? '5px' : '0'}
                    >
                        <TwoLineHeading title="FROM" value="Trivandrum - TRV" />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                        >
                            <TwoLineHeading title="Date" value="09JUN" />
                            <TwoLineHeading title="tIME" value="09.40AM" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row"
                        spacing={isMediumScreen ? '5px' : '0'}
                    >
                        <TwoLineHeading title="To" value="Banglore - BLR" />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                        >
                            <TwoLineHeading title="Date" value="09JUN" />
                            <TwoLineHeading title="tIME" value="09.40AM" />
                        </Stack>
                    </Stack>
                    <Stack
                        direction={isMediumScreen ? 'column' : 'row'}
                        justifyContent={'space-between'}
                        className="details-row"
                        spacing={isMediumScreen ? '5px' : '0'}
                    >
                        <TwoLineHeading title="PNR" value="12345678" />
                        <Stack
                            direction={'row'}
                            justifyContent={'space-between'}
                        >
                            <TwoLineHeading
                                title="Passenger Count"
                                value="2 adults"
                            />
                            <TwoLineHeading
                                title="Seat Numbers"
                                value="25A, 24B"
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
                    <Barcode value={'123456789'} format="CODE128" />
                    {/* high-density linear barcode. supports all 128 ASCII characters */}
                </Box>
                {!isSmallScreen && (
                    <>
                        <div className="dotted-vertical-div"></div>
                        <Stack
                            direction={'column'}
                            padding={'25px'}
                            spacing={'10px'}
                            justifyContent={'space-between'}
                            flex={'1.5'}
                        >
                            <TwoLineHeading
                                title="Passenger Name"
                                value="John Smith"
                            />
                            <Stack
                                direction={'row'}
                                justifyContent={'space-between'}
                            >
                                <TwoLineHeading title="FROM" value="TRV" />
                                <TwoLineHeading title="To" value="BLR" />
                            </Stack>
                            <TwoLineHeading
                                title="Departure"
                                value="09JUN 10:00AM"
                            />
                            <TwoLineHeading
                                title="Arrival"
                                value="09JUN 10:00AM"
                            />
                            <TwoLineHeading
                                title="Seat Numbers"
                                value="25A, 24B"
                            />
                        </Stack>
                    </>
                )}
            </Stack>
            <Box></Box>
        </TicketWrapper>
    );
};
