import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import longArrow from '../../../assets/Long_arrow.svg';
import acIcon from '../../../assets/AcIcon.svg';
import nonAcIcon from '../../../assets/NonAcIcon.svg';
import seatIcon from '../../../assets/SeatIcon.svg';
import sleeperIcon from '../../../assets/SleeperIcon.svg';
import Stack from '@mui/material/Stack';
import { TripAccordionStyled } from './TripCard.styled';
import { TripCardDetails } from './AccordionDetails/TripCardDetails';

interface ITripCardAccordion {
    busType: string;
    seatType: string;
    isDefaultExpanded?: boolean;
}
export const TripCardAccordion = ({
    busType,
    seatType,
    isDefaultExpanded = false,
}: ITripCardAccordion) => {
    return (
        <TripAccordionStyled
            className="summary"
            defaultExpanded={isDefaultExpanded}
        >
            <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel-content"
                id="panel-header"
            >
                <Stack direction={'row'} spacing={12} className="details">
                    <Stack className="trip-card-icons">
                        <img
                            src={busType == 'AC' ? acIcon : nonAcIcon}
                            alt="Bus Type Icon"
                        />
                        <img
                            src={seatType == 'SLEEPER' ? sleeperIcon : seatIcon}
                            alt="Seat Type Icon"
                        />
                    </Stack>
                    <Stack direction={'row'} spacing={4}>
                        <Stack className="date-time">
                            <p>5.00 AM</p> <p className="date">20 Jan</p>
                        </Stack>
                        <img src={longArrow} alt="long-arrow" />
                        <Stack className="date-time">
                            <p>18.40 PM</p> <p className="date">23 Jan</p>
                        </Stack>
                    </Stack>
                    <p>3 days, 13 hours</p>
                    <p>36 seats available</p>
                    <p>Rs. 1300/-</p>
                </Stack>
            </AccordionSummary>
            <TripCardDetails />
        </TripAccordionStyled>
    );
};
