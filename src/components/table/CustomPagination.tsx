import { Pagination, PaginationItem } from '@mui/material';
import {
    gridPageSelector,
    gridPageSizeSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';

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
                count={Math.ceil(totalBookings / pageSize)}
                renderItem={(props) => <PaginationItem {...props} />}
                onChange={(_event, value) => {
                    updateSearchParams(String(value));
                    apiRef.current.setPage(value - 1);
                }}
            />
        </div>
    );
};

export default CustomPagination;
