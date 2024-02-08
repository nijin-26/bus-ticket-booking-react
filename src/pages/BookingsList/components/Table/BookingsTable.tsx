import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
    useGridApiContext,
    useGridSelector,
    gridPageCountSelector,
    gridPageSelector,
} from '@mui/x-data-grid';
import { BookingsTableWrapper } from './BookingsTable.styled';
import { IBooking } from '../../../../api/types/bookings';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';

const CustomToolbar = () => {
    return (
        <GridToolbarContainer
            sx={{
                display: 'flex',
                justifyContent: 'flex-end',
            }}
        >
            <GridToolbarExport />
        </GridToolbarContainer>
    );
};

function CustomPagination({ totalBookings }: { totalBookings: number }) {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '16px',
                width: '100%',
            }}
        >
            {/* Total rows text */}
            <div>
                Total {totalBookings} booking{totalBookings > 1 ? 's' : ''}
            </div>

            {/* Pagination */}
            <Pagination
                color="primary"
                variant="outlined"
                shape="rounded"
                page={page + 1}
                count={pageCount}
                renderItem={(props) => <PaginationItem {...props} />}
                onChange={(event, value) => {
                    apiRef.current.setPage(value - 1);
                }}
            />
        </div>
    );
}

export const BookingsTable = ({ bookings }: { bookings: IBooking[] }) => {
    interface GridValueGetterParams {
        row: IBooking;
    }

    const columns = [
        {
            field: 'pnrNumber',
            headerName: 'PNR Number',
            headerClassName: 'custom-header',
            flex: 1,
            sortable: false,

            renderCell: (params: GridValueGetterParams): JSX.Element => {
                const pnrNumber = params.row.pnrNumber || '';
                return (
                    <a
                        href="#"
                        style={{ textDecoration: 'none', color: '#0000EE' }}
                    >
                        {pnrNumber}
                    </a>
                );
            },
        },
        {
            field: 'username',
            headerName: 'User Name',
            headerClassName: 'custom-header',
            flex: 1,
            sortable: false,
            valueGetter: (params: GridValueGetterParams): string => {
                const firstPersonName =
                    params.row.seats[0].passenger.fullName || '';
                return firstPersonName.toString();
            },
        },
        {
            field: 'origin',
            headerName: 'Origin',
            headerClassName: 'custom-header',
            flex: 1,
            sortable: false,
        },
        {
            field: 'destination',
            headerName: 'Destination',
            headerClassName: 'custom-header',
            flex: 1,
            sortable: false,
        },
        {
            field: 'busType',
            headerName: 'Bus Type',
            headerClassName: 'custom-header',
            flex: 1,
            sortable: false,
        },
        {
            field: 'seatType',
            headerName: 'Seat Type',
            headerClassName: 'custom-header',
            flex: 1,
            sortable: false,
        },
    ];
    return (
        <BookingsTableWrapper>
            <DataGrid
                sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                }}
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
                disableColumnFilter
                disableColumnSelector
                disableColumnMenu
                slots={{
                    toolbar: CustomToolbar,
                    pagination: () => (
                        <CustomPagination totalBookings={bookings.length} />
                    ),
                }}
            />
        </BookingsTableWrapper>
    );
};
