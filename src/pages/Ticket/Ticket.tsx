import { Box, Stack, Typography } from '@mui/material';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import { TicketWrapper } from './Ticket.styled';
import Barcode from 'react-barcode';
import { TwoLineHeading } from './components/TwoLineHeading';

export const Ticket = () => {
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
                direction={'row'}
                spacing={'3'}
                flex={'2'}
                justifyContent={'space-between'}
            >
                <Stack
                    padding={'15px'}
                    direction={'column'}
                    flex={'3'}
                    spacing={'2'}
                    justifyContent={'space-around'}
                >
                    <TwoLineHeading title="Passenger Name" value="John Smith" />
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        className="details-row"
                    >
                        <TwoLineHeading title="FROM" value="Trivandrum - TRV" />
                        <TwoLineHeading title="Date" value="09JUN" />
                        <TwoLineHeading title="tIME" value="09.40AM" />
                    </Stack>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        className="details-row"
                    >
                        <TwoLineHeading title="To" value="Banglore - BLR" />
                        <TwoLineHeading title="Date" value="09JUN" />
                        <TwoLineHeading title="tIME" value="09.40AM" />
                    </Stack>
                    <Stack
                        direction={'row'}
                        justifyContent={'space-between'}
                        className="details1-row"
                    >
                        <TwoLineHeading title="PNR" value="12345678" />
                        <TwoLineHeading
                            title="Passenger Count"
                            value="2 adults"
                        />
                        <TwoLineHeading title="Seat Numbers" value="25A, 24B" />
                    </Stack>
                </Stack>
                <Box
                    component="div"
                    className="rotated-barcode-container"
                    flex={'1'}
                >
                    <Barcode value={'123456789'} format="CODE128" />
                    {/* high-density linear barcode. supports all 128 ASCII characters */}
                </Box>
                <div className="dotted-vertical-div"></div>
                <div className="top-half-circle"></div>
                <div className="bottom-half-circle"></div>
                <Stack
                    direction={'column'}
                    padding={'25px'}
                    spacing={'3'}
                    justifyContent={'space-between'}
                    flex={'1.5'}
                >
                    <TwoLineHeading title="Passenger Name" value="John Smith" />
                    <Stack direction={'row'} justifyContent={'space-between'}>
                        <TwoLineHeading title="FROM" value="TRV" />
                        <TwoLineHeading title="To" value="BLR" />
                    </Stack>
                    <TwoLineHeading title="Departure" value="09JUN 10:00AM" />
                    <TwoLineHeading title="Departure" value="09JUN 10:00AM" />
                    <TwoLineHeading title="Seat Numbers" value="25A, 24B" />
                </Stack>
            </Stack>

            <Box></Box>
        </TicketWrapper>
    );
};
