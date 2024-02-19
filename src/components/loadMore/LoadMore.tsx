import { LoadMoreWrapper } from './LoadMoreWrapper';
import LoadingButton from '@mui/lab/LoadingButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { useSearchParams } from 'react-router-dom';
import { rowsPerPage } from '../../config';
import { useTheme } from '@emotion/react';
import { MutableRefObject } from 'react';

const LoadMore = ({
    resultLength,
    page,
    setPage,
    btnLoading,
    setBtnLoading,
    hasMounted,
}: {
    resultLength: number;
    page: string;
    setPage: (arg: string) => void;
    btnLoading: boolean;
    setBtnLoading: (arg: boolean) => void;
    hasMounted: MutableRefObject<boolean>;
}) => {
    // const [searchParams, setSearchParams] = useSearchParams();

    const theme = useTheme();

    const handleLoadMore = () => {
        hasMounted.current = true;
        setBtnLoading(true);
        const totalPages = String(Math.ceil(resultLength / rowsPerPage));
        // let page = searchParams.get('page') ?? '1';
        if (totalPages > page) {
            page = String(Number(page) + 1);
        }
        // searchParams.set('page', page);
        // setSearchParams(searchParams);
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
                sx={{
                    '& .MuiLoadingButton-loadingIndicator': {
                        color: theme.color.secondary,
                    },
                }}
            >
                Load More
            </LoadingButton>
        </LoadMoreWrapper>
    );
};

export default LoadMore;
