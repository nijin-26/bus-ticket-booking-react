import { Link } from 'react-router-dom';
import { GridColDef } from '@mui/x-data-grid';
import { IBusType, ISeatType, ITicket, ITicketStatus } from '../../types';
import { getDateFromTimestamp } from '../../utils';
import { TFunction } from 'i18next';
import { Dispatch, SetStateAction } from 'react';
import { Button } from '@mui/material';

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
            minWidth: 124,
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
            type: 'number',
            minWidth: 50,
            maxWidth: 50,
            valueGetter: (params: GridValueGetterParams) => {
                return params.row.seats.length;
            },
        },
        {
            field: 'tripId',
            headerName: t('tripId'),
            type: 'number',
            minWidth: 80,
            maxWidth: 80,
            valueGetter: (params: GridValueGetterParams) => {
                return params.row.trip.id;
            },
        },
        {
            field: 'departureDate',
            headerName: t('date'),
            minWidth: 124,
            valueGetter: (params: GridValueGetterParams) => {
                const { formattedDate } = getDateFromTimestamp(
                    params.row.trip.departureTimestamp,
                    'dd-MMM-yyyy'
                );
                return formattedDate;
            },
        },
        {
            field: 'origin',
            headerName: t('origin'),
            minWidth: 124,
            valueGetter: (params: GridValueGetterParams) => {
                const { formattedTime } = getDateFromTimestamp(
                    params.row.trip.departureTimestamp,
                    undefined,
                    'hh:mm a'
                );
                return `${params.row.trip.origin.shortCode} (${formattedTime})`;
            },
        },
        {
            field: 'destination',
            headerName: t('destination'),
            minWidth: 124,
            valueGetter: (params: GridValueGetterParams) => {
                const { formattedTime } = getDateFromTimestamp(
                    params.row.trip.arrivalTimestamp,
                    undefined,
                    'hh:mm a'
                );
                return `${params.row.trip.destination.shortCode} (${formattedTime})`;
            },
        },
        {
            field: 'busType',
            headerName: t('busType'),
            minWidth: 124,
            valueGetter: (params: GridValueGetterParams) => {
                return `${
                    params.row.trip.busType === IBusType.AC ? 'AC' : 'Non-AC'
                }/${
                    params.row.trip.seatType === ISeatType.SEATER
                        ? 'Seater'
                        : 'Sleeper'
                }`;
            },
        },
        {
            field: 'delete',
            headerName: '',
            align: 'center',
            minWidth: 88,
            maxWidth: 88,
            disableExport: true,
            renderCell: (params: GridValueGetterParams): JSX.Element => {
                return params.row.status === ITicketStatus.CONFIRMED ? (
                    <Button
                        variant="contained"
                        onClick={() => {
                            setShowDeleteTicketModal(params.row.pnrNumber);
                        }}
                        size="small"
                        sx={{ textTransform: 'none' }}
                    >
                        Cancel
                    </Button>
                ) : (
                    <p>Cancelled</p>
                );
            },
        },
    ];
};
export default getBookingsTableColumns;
