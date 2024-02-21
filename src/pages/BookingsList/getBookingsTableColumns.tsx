import { Link } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { Download } from '@mui/icons-material';
import { GridColDef } from '@mui/x-data-grid';
import { ITicket } from '../../types';
import { getDateFromTimestamp } from '../../utils';
import { TFunction } from 'i18next';

interface GridValueGetterParams {
    row: ITicket;
}

const getBookingsTableColumns = (t: TFunction): GridColDef[] => {
    return [
        {
            field: 'pnrNumber',
            headerName: t('pnrNumber'),
            maxWidth: 150,
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
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return <p>{params.row.seats.length}</p>;
            },
        },
        {
            field: 'tripId',
            headerName: t('tripId'),
            maxWidth: 80,
            align: 'right',
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return <p>{params.row.trip.id}</p>;
            },
        },
        {
            field: 'departureDate',
            headerName: t('date'),
            align: 'right',
            maxWidth: 110,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const { formattedDate } = getDateFromTimestamp(
                    params.row.trip.departureTimestamp,
                    'dd-mm-yyyy'
                );
                return <p>{formattedDate}</p>;
            },
        },
        {
            field: 'origin',
            headerName: t('origin'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const { formattedTime } = getDateFromTimestamp(
                    params.row.trip.departureTimestamp,
                    'dd-mm-yyyy'
                );
                return (
                    <p>
                        {params.row.trip.originId} ({formattedTime})
                    </p>
                );
            },
        },
        {
            field: 'destination',
            headerName: t('destination'),
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const { formattedTime } = getDateFromTimestamp(
                    params.row.trip.arrivalTimestamp,
                    'dd-mm-yyyy'
                );
                return (
                    <p>
                        {params.row.trip.destinationId} ({formattedTime})
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
                        {params.row.trip.busType}/{params.row.trip.seatType}
                    </p>
                );
            },
        },
        {
            field: 'download',
            headerName: '',
            align: 'center',
            maxWidth: 50,
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
        },
    ];
};
export default getBookingsTableColumns;
