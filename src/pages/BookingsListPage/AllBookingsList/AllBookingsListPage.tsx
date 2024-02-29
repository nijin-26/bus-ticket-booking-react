import { useTranslation } from 'react-i18next';
import { DatagridListingPage } from '../../../components/DatagridListingpage/DatagridListingPage';
import getBookingsTableColumns from '../getBookingsTableColumns';
import { ITicket } from '../../../types';
import { TicketModal } from '../../../components/Ticket/TicketModal';
import { useState } from 'react';
import { ConfirmDialog } from '../../../components';
import { getAllBookings } from '../../../api/endpoints/ticket.api';

export const AllBookingsListPage = () => {
    const { t } = useTranslation(['bookingsList', 'deleteTicketModal']);

    const [showTicket, setShowTicket] = useState<boolean>(false);
    const [showDeleteTicketModal, setShowDeleteTicketModal] =
        useState<string>('');

    const columns = getBookingsTableColumns(
        t,
        setShowTicket,
        setShowDeleteTicketModal
    );
    const cancelModal = () => {
        setShowTicket(false);
    };

    const handleDelete = () => {
        //TODO: Add deletion logic here
        console.log('Deleting');
    };

    return (
        <>
            <DatagridListingPage<ITicket>
                columns={columns}
                t={t}
                getData={getAllBookings}
                rowId={'pnrNumber'}
                frontendPagination={true}
            />
            {showTicket && <TicketModal cancelModal={cancelModal} />}
            <ConfirmDialog
                title={`${t(
                    'deleteTicketModal:title'
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
