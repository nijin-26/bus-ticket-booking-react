import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Download } from '@mui/icons-material';
import { GridColDef } from '@mui/x-data-grid';
import { ITicket } from '../../types';
import { getDateFromTimestamp } from '../../utils';

interface GridValueGetterParams {
    row: ITicket;
}

const useGetBookingsTableColumns = (): GridColDef[] => {
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
            headerAlign: 'center',
        },
        {
            field: 'passengerCount',
            headerName: t('pax'),
            maxWidth: 50,
            align: 'right',
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return <p>{params.row.seats.length}</p>;
            },
            headerAlign: 'center',
        },
        {
            field: 'tripId',
            headerName: t('tripId'),
            maxWidth: 80,
            align: 'right',
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return <p>{params.row.trip.id}</p>;
            },
            headerAlign: 'center',
        },
        {
            field: 'departureDate',
            headerName: t('date'),
            maxWidth: 100,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const { formattedDate } = getDateFromTimestamp(
                    params.row.trip.departureTimestamp
                );
                return <p>{formattedDate}</p>;
            },
            headerAlign: 'center',
        },
        {
            field: 'origin',
            headerName: t('origin'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const { formattedTime } = getDateFromTimestamp(
                    params.row.trip.departureTimestamp
                );
                return (
                    <p>
                        {params.row.trip.originId} ({formattedTime})
                    </p>
                );
            },
            headerAlign: 'center',
        },
        {
            field: 'destination',
            headerName: t('destination'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const { formattedTime } = getDateFromTimestamp(
                    params.row.trip.arrivalTimestamp
                );
                return (
                    <p>
                        {params.row.trip.destinationId} ({formattedTime})
                    </p>
                );
            },
            headerAlign: 'center',
        },
        {
            field: 'busType',
            headerName: t('busType'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <p>
                        {params.row.trip.busType}/{params.row.trip.seatType}
                    </p>
                );
            },
            headerAlign: 'center',
        },
        {
            field: 'download',
            headerName: t('download'),
            align: 'center',
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <p>
                        <IconButton
                            onClick={() => {
                                console.log(params);
                            }}
                        >
                            <Download />
                        </IconButton>
                    </p>
                );
            },
            headerAlign: 'center',
        },
    ];
};
export default useGetBookingsTableColumns;
