import { LoadMoreWrapper } from './LoadMoreWrapper';
import LoadingButton from '@mui/lab/LoadingButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { useSearchParams } from 'react-router-dom';
import { rowsPerPage } from '../../config';
import { useState } from 'react';

const LoadMore = ({ resultLength, page, setPage }: { resultLength: number,page: string, setPage: (arg: string) => void }) => {
    // const [searchParams, setSearchParams] = useSearchParams();
    const [btnLoading, setBtnLoading] = useState(false);

    const handleLoadMore = () => {
        console.log('btnclicked');
        setBtnLoading(true);
        const totalPages = String(Math.ceil(resultLength / rowsPerPage));
        // let page = searchParams.get('page') ?? '1';
        if (totalPages > page) {
            page = String(Number(page) + 1);
        }
        // searchParams.set('page', page);
        // setSearchParams(searchParams);
        setBtnLoading(false);
        setPage(page);
    };
    return (
        <LoadMoreWrapper>
            <hr />
            <LoadingButton
                loading={btnLoading}
                endIcon={<ExpandMoreIcon />}
                variant="outlined"
                className="load-more-btn"
                onClick={handleLoadMore}
            >
                Load More
            </LoadingButton>
        </LoadMoreWrapper>
    );
};

export default LoadMore;
