import { LoadMoreWrapper } from './LoadMoreWrapper';
import LoadingButton from '@mui/lab/LoadingButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const LoadMore = () => {
    return (
        <LoadMoreWrapper>
            <hr />
            <LoadingButton
                // loading
                endIcon={<ExpandMoreIcon />}
                variant="outlined"
                className="load-more-btn"
            >
                Load More
            </LoadingButton>
        </LoadMoreWrapper>
    );
};

export default LoadMore;
