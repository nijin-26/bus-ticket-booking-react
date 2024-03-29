import { Pagination, PaginationItem, useMediaQuery } from '@mui/material';
import {
    gridPageSelector,
    gridPageSizeSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid';
import { TFunction } from 'i18next';
import { CustomPaginationWrapper } from './CustomPagination.styled';

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
    const isSmallScreen = useMediaQuery(`(max-width:40rem)`);
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
    return totalRows ? (
        <CustomPaginationWrapper>
            {/* Total rows text */}
            <p>
                {t('tableFooterTotal')} {totalRows} {t('tableFooterSubject')}
                {totalRows > 1 ? 's' : ''}
            </p>

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
                showFirstButton
                showLastButton
                siblingCount={1}
                boundaryCount={0}
                size={isSmallScreen ? 'small' : 'medium'}
            />
        </CustomPaginationWrapper>
    ) : null;
};

export default CustomPagination;
