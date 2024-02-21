import { Pagination, PaginationItem } from '@mui/material';
import {
    gridPageSelector,
    gridPageSizeSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import { TFunction } from 'i18next';

const CustomPagination = ({
    totalRows,
    updateSearchParams,
    t,
}: {
    totalRows: number;
    updateSearchParams: (newPage: string) => void;
    t: TFunction;
}) => {
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
    return totalRows ? (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.6rem',
                width: '100%',
            }}
        >
            {/* Total rows text */}
            <div>
                {t('tableFooterTotal')} {totalRows} {t('tableFooterSubject')}
                {totalRows > 1 ? 's' : ''}
            </div>

            {/* Pagination */}
            <Pagination
                color="primary"
                variant="outlined"
                shape="rounded"
                page={page + 1}
                count={Math.ceil(totalRows / pageSize)}
                renderItem={(props) => <PaginationItem {...props} />}
                onChange={(_event, value) => {
                    updateSearchParams(String(value));
                    apiRef.current.setPage(value - 1);
                }}
            />
        </div>
    ) : null;
};

export default CustomPagination;
