import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import acIcon from '../../../assets/AcIcon.svg';
import nonAcIcon from '../../../assets/NonAcIcon.svg';
import seatIcon from '../../../assets/SeatIcon.svg';
import sleeperIcon from '../../../assets/SleeperIcon.svg';
import Stack from '@mui/material/Stack';
import { format, formatDuration, intervalToDuration } from 'date-fns';
import LongArrow from '../../icons/LongArrow';
import Tooltip from '@mui/material/Tooltip';
import { TripAccordionWrapper } from './TripCard.styled';
interface ITripCardAccordion {
    id: string;
    origin: string;
    destination: string;
    departureTimestamp: string;
    arrivalTimestamp: string;
    seatType: string;
    busType: string;
    farePerSeat: number;
    availableSeats: number;
    totalSeats: number;
}
let borderDesignClass: string;

export const TripCardAccordion = ({ data }: { data: ITripCardAccordion }) => {
    if (data.availableSeats >= 20) {
        borderDesignClass = 'more-seats';
    } else if (data.availableSeats > 0) {
        borderDesignClass = 'less-seats';
    } else {
        borderDesignClass = 'no-seats';
    }

    const departureDate = new Date(data.departureTimestamp);
    const arrivalDate = new Date(data.arrivalTimestamp);
    const formattedDepartureTime = format(departureDate, 'p');
    const formattedDepartureDate = format(departureDate, 'do LLL');
    const formattedArrivalTime = format(arrivalDate, 'p');
    const formattedArrivalDate = format(arrivalDate, 'do LLL');

    const duration = intervalToDuration({
        start: departureDate,
        end: arrivalDate,
    });
    const formattedDuration = formatDuration(duration, {
        format: ['days', 'hours', 'minutes'],
    });

    return (
        <TripAccordionWrapper className={`summary ${borderDesignClass}`}>
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel-content"
                id="panel-header"
                disabled={data.availableSeats == 0}
            >
                <Stack direction={'row'} spacing={12} className="details">
                    <Stack className="trip-card-icons">
                        <img
                            src={data.busType == 'AC' ? acIcon : nonAcIcon}
                            alt="Bus Type Icon"
                        />
                        <img
                            src={
                                data.seatType == 'SLEEPER'
                                    ? sleeperIcon
                                    : seatIcon
                            }
                            alt="Seat Type Icon"
                        />
                    </Stack>
                    <Stack
                        direction={'row'}
                        spacing={4}
                        className="date-time-parent"
                    >
                        <Stack className="date-time">
                            <p>{formattedDepartureTime}</p>
                            <p className="date">
                                {formattedDepartureDate}
                            </p>
                        </Stack>
                        <LongArrow />
                        <Stack className="date-time">
                            <p>{formattedArrivalTime}</p>
                            <p className="date">
                                {formattedArrivalDate}
                            </p>
                        </Stack>
                    </Stack>
                    <Tooltip title={formattedDuration} arrow>
                        <p className="duration">{formattedDuration}</p>
                    </Tooltip>
                    <p className={`seats ${borderDesignClass}`}>
                        {data.availableSeats} seats available
                    </p>
                    <p className="price">Rs. {data.farePerSeat}/-</p>
                </Stack>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                </Typography>
            </AccordionDetails>
        </TripAccordionWrapper>
    );
};
