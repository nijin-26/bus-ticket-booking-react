import { useTranslation } from 'react-i18next';
import { FullScreenLoader, Ticket } from '../../components';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import {
    AccordionDetails,
    AccordionSummary,
    Button,
    Grid,
    Stack,
    Typography,
} from '@mui/material';
import { useGetTicketData } from '../../components/Ticket/utils/useGetTicketData';
import { ArrowDropDownIcon } from '@mui/x-date-pickers';
import { TicketAccordionWrapper } from './TicketPage.styled';
import { useState } from 'react';
import { SeatLayoutModal } from './SeatLayoutModal/SeatLayoutModal';
import { IGender } from '../../types';

export const TicketPage = () => {
    const { ticketData, loading } = useGetTicketData();
    const { t } = useTranslation(['errorPage', 'passengerDetails', 'ticket']);
    const [viewSeatLayout, setViewSeatLayout] = useState(false);

    const openSeatLayout = () => {
        setViewSeatLayout(true);
    };
    const cancelSeatLayout = () => {
        setViewSeatLayout(false);
    };

    if (loading) {
        return <FullScreenLoader open={loading} />;
    }
    return (
        ticketData && (
            <Stack direction={'column'} justifyContent={'center'} mb={'2rem'}>
                <Ticket data={ticketData} />
                {/* View Seat Layout */}
                <Button
                    variant="text"
                    color={'inherit'}
                    onClick={openSeatLayout}
                    startIcon={<EventSeatIcon />}
                    sx={{
                        margin: '2rem 0',
                        alignSelf: 'flex-end',
                        textTransform: 'none',
                    }}
                >
                    {t('ticket:viewSeatLayout')}
                </Button>

                {viewSeatLayout && (
                    <SeatLayoutModal
                        cancelModal={cancelSeatLayout}
                        ticketData={ticketData}
                    />
                )}
                {/* Passenger Details Accordion */}
                <TicketAccordionWrapper
                    defaultExpanded={false}
                    slotProps={{ transition: { unmountOnExit: true } }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                    >
                        <Typography
                            component="h2"
                            className=" accordion-heading"
                        >
                            {t('passengerDetails:passengerDetailsFormHeading')}{' '}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid container spacing={2} overflow="auto">
                            {/* Row 1 */}
                            <Grid
                                container
                                item
                                spacing={3}
                                justifyContent="space-between"
                                className="emphasize-text"
                            >
                                <Grid item xs={1}>
                                    <Typography
                                        component="h3"
                                        className="emphasize-text"
                                    >
                                        #
                                    </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography
                                        component="h3"
                                        className="emphasize-text"
                                    >
                                        {t('ticket:name')}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography
                                        component="h3"
                                        className="emphasize-text"
                                    >
                                        {t('ticket:seatNumber')}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography
                                        component="h3"
                                        className="emphasize-text"
                                    >
                                        {t('ticket:age')}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography
                                        component="h3"
                                        className="emphasize-text"
                                    >
                                        {t('ticket:gender')}
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/* Row 2 */}

                            {ticketData.seats.map((seat, index) => {
                                return (
                                    <Grid
                                        key={seat.seatNumber}
                                        container
                                        item
                                        spacing={3}
                                        justifyContent="space-between"
                                    >
                                        <Grid item xs={1}>
                                            <Typography component="div">
                                                {index + 1}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={3}>
                                            <Typography component="div">
                                                {seat.passenger.fullName}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography component="div">
                                                {seat.seatNumber}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography component="div">
                                                {seat.passenger.age}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography component="div">
                                                {seat.passenger.gender ===
                                                IGender.MALE
                                                    ? t('ticket:male')
                                                    : t('ticket:female')}
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </AccordionDetails>
                </TicketAccordionWrapper>
                {/* Fare Details Accordion */}
                <TicketAccordionWrapper
                    defaultExpanded={false}
                    slotProps={{ transition: { unmountOnExit: true } }}
                >
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        aria-controls="panel-content"
                        id="panel-header"
                    >
                        <Typography
                            component="h3"
                            className=" accordion-heading"
                        >
                            {t('ticket:fareDetails')}
                        </Typography>{' '}
                    </AccordionSummary>
                    <AccordionDetails className="fare-details">
                        <Grid container spacing={2}>
                            {/* Row 1 */}
                            <Grid
                                container
                                item
                                spacing={3}
                                justifyContent="space-between"
                            >
                                <Grid item xs={9}>
                                    <Typography component="h3">
                                        {t('ticket:noOfSeats')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography component="h3">
                                        {ticketData.seats.length}
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/* Row 2 */}

                            <Grid
                                container
                                item
                                spacing={3}
                                justifyContent="space-between"
                            >
                                <Grid item xs={9}>
                                    <Typography component="h3">
                                        {t('ticket:farePerSeat')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography component="h3">
                                        ₹ {ticketData.trip.farePerSeat}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                item
                                spacing={3}
                                justifyContent="space-between"
                            >
                                <Grid item xs={9}>
                                    <Typography
                                        component="h3"
                                        className="emphasize-text"
                                    >
                                        {t('ticket:paidAmt')}
                                    </Typography>
                                </Grid>

                                <Grid item xs={3}>
                                    <Typography
                                        component="h3"
                                        className="emphasize-text"
                                    >
                                        ₹{' '}
                                        {ticketData.trip.farePerSeat *
                                            ticketData.seats.length}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </AccordionDetails>
                </TicketAccordionWrapper>
            </Stack>
        )
    );
};
