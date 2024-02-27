import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTicketByPnr } from '../../api/endpoints/ticket.api';
import { ITicket } from '../../types';
import { Ticket } from '../../components';
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader';

export const TicketPage = () => {
    const location = useLocation();
    const { pnrNumber } = useParams();
    const { t } = useTranslation('error');

    const ticketDataFromState = location.state as ITicket | null;

    const [ticketData, setTicketData] = useState<ITicket>();
    const [loading, setLoading] = useState<boolean>(true);

    const errorText = t('unexpected');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (pnrNumber) {
                    const response = await getTicketByPnr(pnrNumber);
                    console.log(response);
                    setTicketData(response);
                }
            } catch (error) {
                toast.error(errorText);
            } finally {
                setLoading(false);
            }
        };

        if (!ticketDataFromState) {
            void fetchData();
        } else {
            setTicketData(ticketDataFromState);
            setLoading(false);
        }
    }, [errorText, pnrNumber, ticketDataFromState]);

    if (loading) {
        return <FullScreenLoader open={loading} />;
    }

    return ticketData && <Ticket data={ticketData} />;
};
