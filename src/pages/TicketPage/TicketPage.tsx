import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getTicketByPnr } from '../../api/endpoints/ticket.api';
import { ITicket } from '../../types';
import { Ticket } from '../../components';
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader';
import { Home } from '@mui/icons-material';
import { Button } from '@mui/material';
import { paths } from '../../config';

export const TicketPage = () => {
    const location = useLocation();
    const { pnrNumber } = useParams();
    const { t } = useTranslation(['error', 'errorPage']);
    const navigate = useNavigate();

    const ticketDataFromState = location.state as ITicket | null;

    const [ticketData, setTicketData] = useState<ITicket>();
    const [loading, setLoading] = useState<boolean>(true);

    const errorText = t('error:unexpected');

    const goHomeHandler = () => {
        navigate(paths.home);
    };

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

    return (
        ticketData && (
            <>
                <Button
                    variant="contained"
                    onClick={goHomeHandler}
                    startIcon={<Home />}
                    sx={{marginTop:'10px'}}
                >
                    {t('errorPage:goHome')}
                </Button>
                <Ticket data={ticketData} />
            </>
        )
    );
};
