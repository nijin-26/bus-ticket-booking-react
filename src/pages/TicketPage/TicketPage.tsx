import { useTranslation } from 'react-i18next';
import {  useNavigate, useParams } from 'react-router-dom';
import { Ticket } from '../../components';
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader';
import { Home } from '@mui/icons-material';
import { Button } from '@mui/material';
import { paths } from '../../config';
import { useGetTicketData } from '../../components/Ticket/utils/useGetTicketData';

export const TicketPage = () => {
    const { pnrNumber } = useParams();
    const navigate = useNavigate();

    const { t } = useTranslation('errorPage');

    const goHomeHandler = () => {
        navigate(paths.home);
    };

    const { ticketData, loading } = useGetTicketData(pnrNumber);

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
                    sx={{ marginTop: '10px' }}
                >
                    {t('goHome')}
                </Button>
                <Ticket data={ticketData} />
            </>
        )
    );
};
