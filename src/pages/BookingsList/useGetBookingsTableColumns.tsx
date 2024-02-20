import { useTranslation } from 'react-i18next';
import { IBooking } from '../../types/bookingsList';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Download } from '@mui/icons-material';

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
                return (
                    <>
                        <Link to="#">{params.row.pnrNumber}</Link>
                    </>
                );
            },
        },
        {
            field: 'passengerCount',
            headerName: t('pax'),
            maxWidth: 50,
            align: 'right',
        },
        {
            field: 'tripId',
            headerName: t('tripId'),
            maxWidth: 80,
            align: 'right',
        },
        {
            field: 'departureDate',
            headerName: t('date'),
            maxWidth: 100,
            align: 'right',
        },
        {
            field: 'origin',
            headerName: t('origin'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <p>
                        {params.row.origin} ({params.row.departure})
                    </p>
                );
            },
        },
        {
            field: 'destination',
            headerName: t('destination'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <p>
                        {params.row.destination} ({params.row.arrival})
                    </p>
                );
            },
        },
        {
            field: 'busType',
            headerName: t('busType'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <p>
                        {params.row.busType}/{params.row.seatType}
                    </p>
                );
            },
        },
        {
            field: 'download',
            headerName: t('download'),
            align: 'center',
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <p>
                        <IconButton>
                            <Download />
                        </IconButton>
                    </p>
                );
            },
        },
    ];
};
export default useGetBookingsTableColumns;
