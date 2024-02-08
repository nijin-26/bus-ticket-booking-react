import {
    DataGrid,
    GridToolbarContainer,
    GridToolbarExport,
    useGridApiContext,
    useGridSelector,
    gridPageSelector,
    gridPageSizeSelector,
} from '@mui/x-data-grid';
import { BookingsTableWrapper } from './BookingsTable.styled';
import { IBooking, IBookingsList } from '../../../../../api/types/bookings';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { LinearProgress } from '@mui/material';
import CustomNoRowsOverlay from '../CustomNoRowsOverlay/CustomNoRowsOverlay';
import { Link } from 'react-router-dom';

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

const CustomPagination = ({
    totalBookings,
    updateSearchParams,
}: {
    totalBookings: number;
    updateSearchParams: (newPage: string) => void;
}) => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
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
                // count={pageCount}
                count={Math.ceil(totalBookings / pageSize)}
                renderItem={(props) => <PaginationItem {...props} />}
                onChange={(event, value) => {
                    console.log(value);
                    updateSearchParams(String(value));
                    apiRef.current.setPage(value);
                }}
            />
        </div>
    );
};

export const BookingsTable = ({
    bookingsData,
    loading,
    updateSearchParams,
}: {
    bookingsData: IBookingsList | { count: number; data: [] };
    loading: boolean;
    updateSearchParams: (newPage: string) => void;
}) => {
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
                return <Link to="#">{pnrNumber}</Link>;
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
                rows={bookingsData.data}
                getRowId={(row) => row.pnrNumber}
                columns={columns}
                autoHeight={true}
                initialState={{
                    pagination: {
                        paginationModel: {
                            page: 0,
                            pageSize: 10,
                        },
                    },
                }}
                pagination
                loading={loading}
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableColumnMenu
                slots={{
                    toolbar: CustomToolbar,
                    pagination: () => (
                        <CustomPagination
                            totalBookings={bookingsData.count}
                            updateSearchParams={updateSearchParams}
                        />
                    ),
                    loadingOverlay: LinearProgress,
                    noRowsOverlay: CustomNoRowsOverlay,
                }}
            />
        </BookingsTableWrapper>
    );
};
