import { Link } from 'react-router-dom';
import { GridColDef } from '@mui/x-data-grid';
import { ITicket } from '../../types';
import { getDateFromTimestamp } from '../../utils';
import { TFunction } from 'i18next';
import { Dispatch, SetStateAction } from 'react';
import { IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';

interface GridValueGetterParams {
    row: ITicket;
}

const getBookingsTableColumns = (
    t: TFunction,
    setShowTicket: Dispatch<SetStateAction<boolean>>,
    setShowDeleteTicketModal: Dispatch<SetStateAction<string>>
): GridColDef[] => {
    return [
        {
            field: 'pnrNumber',
            headerName: t('pnrNumber'),
            maxWidth: 150,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <>
                        <Link
                            to="#"
                            state={params.row}
                            onClick={() => {
                                setShowTicket(true);
                            }}
                        >
                            {params.row.pnrNumber}
                        </Link>
                    </>
                );
            },
        },
        {
            field: 'passengerCount',
            headerName: t('pax'),
            maxWidth: 50,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return <p>{params.row.seats.length}</p>;
            },
        },
        {
            field: 'tripId',
            headerName: t('tripId'),
            maxWidth: 80,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return <p>{params.row.trip.id}</p>;
            },
        },
        {
            field: 'departureDate',
            headerName: t('date'),
            maxWidth: 150,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const { formattedDate } = getDateFromTimestamp(
                    params.row.trip.departureTimestamp,
                    'dd-MMM-yyyy'
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
                    undefined,
                    'hh:mm a'
                );
                return (
                    <p>
                        {params.row.trip.origin.shortCode} ({formattedTime})
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
                    undefined,
                    'hh:mm a'
                );
                return (
                    <p>
                        {params.row.trip.destination.shortCode} ({formattedTime}
                        )
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
            field: 'delete',
            headerName: '',
            align: 'center',
            maxWidth: 50,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return (
                    <p>
                        <IconButton
                            onClick={() => {
                                setShowDeleteTicketModal(params.row.pnrNumber);
                            }}
                        >
                            <Delete />
                        </IconButton>
                    </p>
                );
            },
        },
    ];
};
export default getBookingsTableColumns;
