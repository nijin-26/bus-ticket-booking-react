import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
import { IPagination } from '../../types/pagination';
import { CustomTableWrapper } from './CustomTable.styled';
import CustomToolbar from './CustomToolbar';
import CustomPagination from './CustomPagination';
import CustomNoRowsOverlay from './CustomNoRowsOverlay/CustomNoRowsOverlay';
import { IBooking } from '../../api/types/bookings';

export const CustomTable = ({
    pageState,
    updatePageState,
    updateSearchParams,
    columns,
    rowId,
}: {
    pageState: IPagination;
    updatePageState: (pageState: Partial<IPagination>) => void;
    updateSearchParams: (newPage: string) => void;
    columns: GridColDef[];
    rowId: keyof IBooking;
}) => {
    return (
        <CustomTableWrapper>
            <DataGrid
                sx={{
                    borderRadius: 2,
                    boxShadow: 3,
                    pl: '5rem',
                    pr: '5rem',
                }}
                rows={pageState.data}
                rowCount={pageState.totalNumberOfData}
                getRowId={(row: IBooking) => String(row[rowId])}
                columns={columns.map((column) => ({
                    ...column,
                    headerClassName: 'custom-header',
                    flex: 1,
                    sortable: false,
                }))}
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
                paginationModel={{
                    page: pageState.page,
                    pageSize: pageState.pageSize,
                }}
                paginationMode="server"
                loading={pageState.loading}
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableColumnMenu
                onPaginationModelChange={(newPaginationModel) => {
                    updatePageState(newPaginationModel);
                }}
                slots={{
                    toolbar: CustomToolbar,
                    pagination: () => (
                        <CustomPagination
                            totalBookings={pageState.totalNumberOfData}
                            updateSearchParams={updateSearchParams}
                        />
                    ),
                    loadingOverlay: LinearProgress,
                    noRowsOverlay: CustomNoRowsOverlay,
                }}
            />
        </CustomTableWrapper>
    );
};
