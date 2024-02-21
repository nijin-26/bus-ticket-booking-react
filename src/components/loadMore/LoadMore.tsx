import { LoadMoreWrapper } from './LoadMoreWrapper';
import LoadingButton from '@mui/lab/LoadingButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { rowsPerPage } from '../../config';
import { useTheme } from '@emotion/react';
import { MutableRefObject } from 'react';
import { useTranslation } from 'react-i18next';

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
    const theme = useTheme();
    const { t } = useTranslation('tripListing');

    const handleLoadMore = () => {
        hasMounted.current = true;
        setBtnLoading(true);
        const totalPages = String(Math.ceil(resultLength / rowsPerPage));
        if (totalPages > page) {
            page = String(Number(page) + 1);
        }
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
                {t('loadMore')}
            </LoadingButton>
        </LoadMoreWrapper>
    );
};

export default LoadMore;
