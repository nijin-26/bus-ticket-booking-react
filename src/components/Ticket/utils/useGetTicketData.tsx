import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTicketByPnr } from '../../../api/endpoints/ticket.api';
import { ITicket } from '../../../types';

export const useGetTicketData = () => {
    const { pnrNumber: pnrNumberFromParams } = useParams();
    const [searchParams] = useSearchParams();
    const pnrNumberFromSearchParams = searchParams.get('pnr');
    const [ticketData, setTicketData] = useState<ITicket>();
    const [loading, setLoading] = useState<boolean>(true);
    const location = useLocation();

    const ticketDataFromState = location.state as ITicket | null;

    const { t } = useTranslation('error');
    const errorText = t('unexpected');

    useEffect(() => {
        const fetchData = async (pnr: string) => {
            try {
                const response = await getTicketByPnr(pnr);
                setTicketData(response);
            } catch (error) {
                toast.error(errorText, { toastId: 'Error toast ' });
            } finally {
                setLoading(false);
            }
        };

        if (!ticketDataFromState) {
            if (pnrNumberFromParams) {
                void fetchData(pnrNumberFromParams);
                return;
            }

            if (pnrNumberFromSearchParams) {
                void fetchData(pnrNumberFromSearchParams);
            }
        } else {
            setTicketData(ticketDataFromState);
            setLoading(false);
        }
    }, [
        errorText,
        pnrNumberFromParams,
        pnrNumberFromSearchParams,
        ticketDataFromState,
    ]);

    return { ticketData, loading };
};
