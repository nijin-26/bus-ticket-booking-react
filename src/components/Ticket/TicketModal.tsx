import { Dispatch, SetStateAction } from 'react';
import { Overlay } from '../actionBar/pnrSearch/PnrSearch.styled';
import { Ticket } from './Ticket';
import FullScreenLoader from '../FullScreenLoader/FullScreenLoader';
import CloseIcon from '@mui/icons-material/Close';
import { useGetTicketData } from './utils/useGetTicketData';
import { useSearchParams } from 'react-router-dom';

export const TicketModal = ({
    showTicketStateObject,
}: {
    showTicketStateObject: {
        showTicket: boolean;
        setShowTicket: Dispatch<SetStateAction<boolean>>;
    };
}) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const pnrNumber: string | null = searchParams.get('pnr');

    const { ticketData, loading } = useGetTicketData(pnrNumber);

    if (loading) {
        return <FullScreenLoader open={loading} />;
    }
    return (
        ticketData && (
            <Overlay
                onClick={() => {
                    searchParams.delete('pnr');
                    setSearchParams(searchParams);
                    showTicketStateObject.setShowTicket(false);
                }}
            >
                <CloseIcon
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents the overlay's onClick from being triggered
                        showTicketStateObject.setShowTicket(false);
                    }}
                    className="close-icon"
                />
                <div className="centered-ticket-container">
                    <Ticket data={ticketData} />
                </div>
            </Overlay>
        )
    );
};
