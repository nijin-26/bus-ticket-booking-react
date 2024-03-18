import { Download } from '@mui/icons-material';
import Button from '@mui/material/Button';
import {
    GridCsvGetRowsToExportParams,
    GridToolbarContainer,
    gridPaginatedVisibleSortedGridRowIdsSelector,
    useGridApiContext,
} from '@mui/x-data-grid';
import { useTranslation } from 'react-i18next';

const CustomToolbar = () => {
    const apiRef = useGridApiContext();
    const { t } = useTranslation('tableExportOptions');
    return (
        <GridToolbarContainer
            sx={{
                justifyContent: 'flex-end',
            }}
        >
            <Button
                color="primary"
                size="small"
                startIcon={<Download />}
                sx={{ textTransform: 'none' }}
                onClick={() => {
                    apiRef.current.exportDataAsCsv({
                        getRowsToExport: ({
                            apiRef,
                        }: GridCsvGetRowsToExportParams) =>
                            gridPaginatedVisibleSortedGridRowIdsSelector(
                                apiRef
                            ),
                    });
                }}
            >
                {t('currentPage')}
            </Button>
        </GridToolbarContainer>
    );
};

export default CustomToolbar;
