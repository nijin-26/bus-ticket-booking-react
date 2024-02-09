import { Link } from 'react-router-dom';
import { IBooking } from '../../api/types/bookings';
import { GridColDef } from '@mui/x-data-grid';

interface GridValueGetterParams {
    row: IBooking;
}

const bookingsListTableColumns: GridColDef[] = [
    {
        field: 'pnrNumber',
        headerName: 'PNR Number',
        renderCell: (params: GridValueGetterParams): JSX.Element => {
            const pnrNumber = params.row.pnrNumber || '';
            return <Link to="#">{pnrNumber}</Link>;
        },
    },
    {
        field: 'username',
        headerName: 'User Name',
        valueGetter: (params: GridValueGetterParams): string => {
            const firstPersonName =
                params.row.seats[0].passenger.fullName || '';
            return firstPersonName.toString();
        },
    },
    {
        field: 'origin',
        headerName: 'Origin',
    },
    {
        field: 'destination',
        headerName: 'Destination',
    },
    {
        field: 'busType',
        headerName: 'Bus Type',
    },
    {
        field: 'seatType',
        headerName: 'Seat Type',
    },
];

export default bookingsListTableColumns;
