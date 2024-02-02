import { Box } from "@mui/material";
import busPlaceholder from '../../assets/bus-ticket.svg';
import { TicketWrapper } from "./Ticket.styled";


export const Ticket = () => {
    return (
        <TicketWrapper>
            <Box
                component="div"
                sx={{
                    width: 400,
                    borderRadius: 1,
                }}
            >
                <Box
                    component="img"
                    p={5}
                    sx={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover', // Ensure the image covers the entire box
                        borderRadius: 1, // Inherit the border radius from the parent box
                    }}
                    alt="Bus Placeholder."
                    src={busPlaceholder}
                />

            </Box>
        </TicketWrapper>
    );
};
