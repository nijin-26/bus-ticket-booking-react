import { useTranslation } from 'react-i18next';
import { DatagridListingPage } from '../../components/DatagridListingpage/DatagridListingPage';
import getBookingsTableColumns from './getBookingsTableColumns';
import { ITicket } from '../../types';
import { TicketModal } from '../../components/Ticket/TicketModal';
import { useState } from 'react';
import { ConfirmDialog } from '../../components';
import { cancelBooking } from '../../api/endpoints/ticket.api';
import FullScreenLoader from '../../components/FullScreenLoader/FullScreenLoader';
import { toast } from 'react-toastify';

export const BookingsListPage = ({
    getData,
    frontendPagination,
}: {
    getData: () => Promise<ITicket[]>;
    frontendPagination: boolean;
}) => {
    const { t } = useTranslation(['bookingsList', 'deleteTicketModal']);

    const [showTicket, setShowTicket] = useState<boolean>(false);
    const [showDeleteTicketModal, setShowDeleteTicketModal] =
        useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const columns = getBookingsTableColumns(
        t,
        setShowTicket,
        setShowDeleteTicketModal
    );
    const cancelModal = () => {
        setShowTicket(false);
    };

    const handleDelete = () => {
        void (async () => {
            try {
                setLoading(true);
                await cancelBooking(showDeleteTicketModal);
                toast.success(t('successToast'));
            } catch (e) {
                console.error(e);
                toast.error(t('errorToast'));
            } finally {
                setLoading(false);
            }
        })();
    };

    if (loading) {
        return <FullScreenLoader open={loading} />;
    }

    return (
        <>
            <DatagridListingPage<ITicket>
                columns={columns}
                t={t}
                getData={getData}
                rowId={'pnrNumber'}
                frontendPagination={frontendPagination}
            />
            {showTicket && <TicketModal cancelModal={cancelModal} />}
            <ConfirmDialog
                title={`${String(
                    t('deleteTicketModal:title')
                )} ${showDeleteTicketModal} ?`}
                open={showDeleteTicketModal != ''}
                handleClose={() => {
                    setShowDeleteTicketModal('');
                }}
                agreeText={t('deleteTicketModal:confirmText')}
                disagreeText={t('deleteTicketModal:cancelText')}
                handleAgreeFunction={handleDelete}
            >
                {t('deleteTicketModal:message')}
            </ConfirmDialog>
        </>
    );
};
