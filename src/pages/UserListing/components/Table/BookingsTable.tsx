import { DataGrid } from '@mui/x-data-grid';
import { BookingsTableWrapper } from './BookingsTable.styled';
import { ITicket } from '../../../../interfaces/ticket';

export const BookingsTable = ({ bookings }: { bookings: ITicket[] }) => {
    const columns = [{ field: 'pnrNumber', headerName: 'PNR Number', flex: 1 }];
    return (
        <BookingsTableWrapper>
            <DataGrid
                rows={bookings}
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
