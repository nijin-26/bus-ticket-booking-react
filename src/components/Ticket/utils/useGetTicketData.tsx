import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import {
    useLocation,
    useNavigate,
    useParams,
    useSearchParams,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTicketByPnr } from '../../../api/endpoints/ticket.api';
import { ITicket } from '../../../types';
import { paths } from '../../../config';

export const useGetTicketData = () => {
    const { pnr: pnrNumberFromParams } = useParams();
    const [searchParams, setSearchParams] = useSearchParams();
    const pnrNumberFromSearchParams = searchParams.get('pnr');
    const [ticketData, setTicketData] = useState<ITicket>();
    const [loading, setLoading] = useState<boolean>(true);
    const location = useLocation();
    const ticketDataFromLocationState = location.state as ITicket | null;
    const navigate = useNavigate();

    const { t } = useTranslation('ticket');
    const errorText = t('errorPNRSearch');

    useEffect(() => {
        const fetchData = async (pnr: string) => {
            try {
                const response = await getTicketByPnr(pnr);
                setTicketData(response);
            } catch (error) {
                if (pnrNumberFromSearchParams) {
                    searchParams.delete('pnr');
                    setSearchParams(searchParams);
                } else {
                    navigate(paths.error, { replace: true });
                }
                toast.error(errorText, { toastId: 'Error toast ' });
            } finally {
                setLoading(false);
            }
        };

        if (ticketDataFromLocationState) {
            setTicketData(ticketDataFromLocationState);
            setLoading(false);
        } else if (pnrNumberFromParams) {
            void fetchData(pnrNumberFromParams);
            return;
        } else if (pnrNumberFromSearchParams) {
            void fetchData(pnrNumberFromSearchParams);
            return;
        }
    }, [
        errorText,
        navigate,
        pnrNumberFromParams,
        pnrNumberFromSearchParams,
        searchParams,
        setSearchParams,
        ticketDataFromLocationState,
    ]);

    return { ticketData, loading };
};
