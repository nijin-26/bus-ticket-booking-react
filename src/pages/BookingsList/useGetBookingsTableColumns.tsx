import { Link } from 'react-router-dom';
import { IBooking } from '../../api/types/bookings';
import { useTranslation } from 'react-i18next';

interface GridValueGetterParams {
    row: IBooking;
}

const useGetBookingsTableColumns = () => {
    const { t } = useTranslation('bookingsList');
    return [
        {
            field: 'pnrNumber',
            headerName: t('pnrNumber'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const pnrNumber = params.row.pnrNumber || '';
                return <Link to="#">{pnrNumber}</Link>;
            },
        },
        {
            field: 'username',
            headerName: t('username'),
            valueGetter: (params: GridValueGetterParams): string => {
                const firstPersonName =
                    params.row.seats[0].passenger.fullName || '';
                return firstPersonName.toString();
            },
        },
        {
            field: 'origin',
            headerName: t('origin'),
        },
        {
            field: 'destination',
            headerName: t('destination'),
        },
        {
            field: 'busType',
            headerName: t('busType'),
        },
        {
            field: 'seatType',
            headerName: t('seatType'),
        },
    ];
};
export default useGetBookingsTableColumns;
