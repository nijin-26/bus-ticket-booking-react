import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTicketByPnr } from '../../../api/endpoints/ticket.api';
import { ITicket } from '../../../types';

export const useGetTicketData = (pnrNumber: string | undefined | null) => {
    const [ticketData, setTicketData] = useState<ITicket>();
    const [loading, setLoading] = useState<boolean>(true);
    const location = useLocation();

    const ticketDataFromState = location.state as ITicket | null;

    const { t } = useTranslation('error');
    const errorText = t('unexpected');

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (pnrNumber) {
                    const response = await getTicketByPnr(pnrNumber);
                    setTicketData(response);
                }
            } catch (error) {
                toast.error(errorText, { toastId: 'Error toast ' });
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

    return { ticketData, loading };
};
