import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import longArrow from '../../../assets/Long_arrow.svg';
import acIcon from '../../../assets/AcIcon.svg';
import nonAcIcon from '../../../assets/NonAcIcon.svg';
import seatIcon from '../../../assets/SeatIcon.svg';
import sleeperIcon from '../../../assets/SleeperIcon.svg';
import Stack from '@mui/material/Stack';
import { TripCardStyled } from './TripCard.styled';

interface ITripCardAccordion {
    busType: string;
    seatType: string;
}
export const TripCardAccordion = ({
    busType,
    seatType,
}: ITripCardAccordion) => {
    return (
        <TripCardStyled>
            <Accordion className="summary">
                <AccordionSummary
                    expandIcon={<ArrowDropDownIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Stack direction={'row'} spacing={12} className="details">
                        <Stack className="trip-card-icons">
                            {busType == 'AC' ? (
                                <img src={acIcon} alt="Ac Icon" />
                            ) : (
                                <img src={nonAcIcon} alt="Non Ac Icon" />
                            )}
                            {seatType == 'SLEEPER' ? (
                                <img src={sleeperIcon} alt="Sleeper Icon" />
                            ) : (
                                <img src={seatIcon} alt="Seat Icon" />
                            )}
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
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </TripCardStyled>
    );
};
