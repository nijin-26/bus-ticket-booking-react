import { Overlay } from '../actionBar/pnrSearch/PnrSearch.styled';
import { Ticket } from './Ticket';
import FullScreenLoader from '../FullScreenLoader/FullScreenLoader';
import { useGetTicketData } from './utils/useGetTicketData';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { paths } from '../../config/constants';
import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const TicketModal = ({ cancelModal }: { cancelModal: () => void }) => {
    const { t } = useTranslation('ticket');
    const [searchParams, setSearchParams] = useSearchParams();
    const pnrNumber = searchParams.get('pnr');
    const navigate = useNavigate();

    const { ticketData, loading } = useGetTicketData();

    if (loading) {
        return <FullScreenLoader open={loading} />;
    }

    return (
        ticketData && (
            <Overlay
                onClick={(e) => {
                    if (e.target === e.currentTarget) {
                        if (pnrNumber) {
                            searchParams.delete('pnr');
                            setSearchParams(searchParams);
                        }
                        cancelModal();
                    }
                }}
            >
                <div className="centered-ticket-container">
                    <Button
                        variant="contained"
                        onClick={() => {
                            navigate(paths.ticket + '/' + ticketData.pnrNumber);
                        }}
                        className="ticket-btn"
                        sx={{ textTransform: 'none' }}
                    >
                        {' '}
                        {t('viewDetailedTicket')}
                    </Button>
                    <Ticket data={ticketData} />
                </div>
            </Overlay>
        )
    );
};
