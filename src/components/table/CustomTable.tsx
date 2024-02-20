import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { LinearProgress } from '@mui/material';
import { IPagination } from '../../types/pagination';
import { CustomTableWrapper } from './CustomTable.styled';
import CustomToolbar from './CustomToolbar';
import CustomPagination from './CustomPagination';
import CustomNoRowsOverlay from './CustomNoRowsOverlay/CustomNoRowsOverlay';
import { useTranslation } from 'react-i18next';
import resources from '../../i18n/types/resources';

export interface ICustomTable<T> {
    pageState: IPagination<T>;
    updatePageState: (pageState: Partial<IPagination<T>>) => void;
    updateSearchParams: (newPage: string) => void;
    rowId: keyof T;
    columns: GridColDef[];
    languageNamespace: keyof typeof resources;
}

export const CustomTable = <T,>({
    pageState,
    updatePageState,
    updateSearchParams,
    columns,
    rowId,
    languageNamespace,
}: ICustomTable<T>) => {
    const { t } = useTranslation(languageNamespace);
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
                getRowId={(row: T) => String(row[rowId])}
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
                loading={pageState.loading}
                disableRowSelectionOnClick
                disableColumnFilter
                disableColumnSelector
                disableColumnMenu
                onPaginationModelChange={(newPaginationModel) => {
                    updatePageState(newPaginationModel);
                }}
                localeText={{
                    toolbarExport: t('export'),
                    toolbarExportCSV: t('exportAsCsv'),
                    toolbarExportPrint: t('exportPrint'),
                }}
                slots={{
                    toolbar: CustomToolbar,
                    pagination: () => (
                        <CustomPagination
                            totalBookings={pageState.totalNumberOfData}
                            updateSearchParams={updateSearchParams}
                            languageNamespace={languageNamespace}
                        />
                    ),
                    loadingOverlay: LinearProgress,
                    noRowsOverlay: CustomNoRowsOverlay,
                }}
            />
        </CustomTableWrapper>
    );
};
