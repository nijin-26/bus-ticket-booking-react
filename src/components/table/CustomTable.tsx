import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
import { IPagination } from '../../types/pagination';
import { CustomTableWrapper } from './CustomTable.styled';
import CustomToolbar from './CustomToolbar';
import CustomPagination from './CustomPagination';
import CustomNoRowsOverlay from './CustomNoRowsOverlay/CustomNoRowsOverlay';

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
    rowId: keyof (typeof pageState.data)[];
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
                getRowId={(row) => row[rowId] as string}
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
                            totalBookings={pageState.totalBookings}
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
