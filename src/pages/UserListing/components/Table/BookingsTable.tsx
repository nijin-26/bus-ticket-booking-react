import { DataGrid } from '@mui/x-data-grid';
import { BookingsTableWrapper } from './BookingsTable.styled';
import { IBooking } from '../../../../api/types/bookings';

export const BookingsTable = ({ bookings }: { bookings: IBooking[] }) => {

    interface GridValueGetterParams {
        row: IBooking;
    }
    
    const columns = [
        { field: 'pnrNumber', headerName: 'PNR Number', flex: 1 },
        {
            field: 'username',
            headerName: 'User Name',
            flex: 1,
            valueGetter: (params: GridValueGetterParams): string => {

                    const firstPersonName =
                        params.row.seats[0].passenger.fullName || '';
                    return firstPersonName.toString();
            },
        },
        { field: 'origin', headerName: 'Origin', flex: 1 },
        { field: 'destination', headerName: 'Destination', flex: 1 },
        { field: 'departureTimestamp', headerName: 'Departure Time', flex: 1 },
        { field: 'arrivalTimestamp', headerName: 'Arrival Time', flex: 1 },
        { field: 'busType', headerName: 'Bus Type', flex: 1 },
        { field: 'seatType', headerName: 'Seat Type', flex: 1 },
        { field: 'farePerSeat', headerName: 'Fare Per Seat', flex: 1 },
    ];
    return (
        <BookingsTableWrapper>
            <DataGrid
                rows={bookings}
                getRowId={(row) => row.pnrNumber}
                columns={columns}
                pageSizeOptions={[5, 10, 20]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            page: 0,
                            pageSize: 10,
                        },
                    },
                }}
                pagination
                disableRowSelectionOnClick
            />
        </BookingsTableWrapper>
    );
};
