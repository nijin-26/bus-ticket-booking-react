import { Pagination, PaginationItem } from "@mui/material";
import { useGridApiContext, useGridSelector, gridPageSelector, gridPageCountSelector } from "@mui/x-data-grid";

const CustomPagination() {
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
                {pageCount} result{pageCount > 1 ? 's' : ''}
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

export default CustomPagination;