import { useTranslation } from 'react-i18next';
import { DatagridListingPage } from '../../../components/DatagridListingpage/DatagridListingPage';
import getBookingsTableColumns from '../getBookingsTableColumns';
import { getMyBookings } from '../../../api/endpoints/ticket.api';
import { ITicket } from '../../../types';

export const MyBookingsPage = () => {
    const { t } = useTranslation('bookingsList');
    const columns = getBookingsTableColumns(t);
    return (
        <DatagridListingPage<ITicket>
            columns={columns}
            t={t}
            getData={getMyBookings}
            rowId={'pnrNumber'}
        />
    );
};
