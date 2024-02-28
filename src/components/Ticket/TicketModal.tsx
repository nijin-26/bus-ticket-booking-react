import { Overlay } from '../actionBar/pnrSearch/PnrSearch.styled';
import { Ticket } from './Ticket';
import FullScreenLoader from '../FullScreenLoader/FullScreenLoader';
import CloseIcon from '@mui/icons-material/Close';
import { useGetTicketData } from './utils/useGetTicketData';
import { useSearchParams } from 'react-router-dom';

export const TicketModal = ({ cancelModal }: { cancelModal: () => void }) => {
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
                    cancelModal();
                }}
            >
                <CloseIcon
                    onClick={(e) => {
                        e.stopPropagation(); // Prevents the overlay's onClick from being triggered
                        cancelModal();
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
