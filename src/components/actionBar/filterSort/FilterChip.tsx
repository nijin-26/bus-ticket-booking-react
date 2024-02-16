import { Stack } from '@mui/material';
import { FixedChip } from './FilterSort.styled';
import { filterValues } from '../../../config';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
    removeBusFilter,
    removeSeatFilter,
} from '../../../app/features/busSearchSlice';
import { useAppSelector } from '../../../app/hooks';
import { useSearchParams } from 'react-router-dom';

const FilterChip: React.FC = () => {
    const { t } = useTranslation('filterSort');
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const params = useAppSelector((state) => state.busSearch);

    return (
        <Stack spacing={1} direction="row">
            {params.busType ? (
                <FixedChip
                    onDelete={() => {
                        searchParams.delete('busType');
                        setSearchParams(searchParams);
                        dispatch(removeBusFilter());
                    }}
                    label={
                        params.busType === filterValues.ac
                            ? t('AC')
                            : t('nonAC')
                    }
                />
            ) : (
                <></>
            )}
            {params.seatType ? (
                <FixedChip
                    onDelete={() => {
                        searchParams.delete('seatType');
                        setSearchParams(searchParams);
                        dispatch(removeSeatFilter());
                    }}
                    label={
                        params.seatType === filterValues.seater
                            ? t('seater')
                            : t('sleeper')
                    }
                />
            ) : (
                <></>
            )}
        </Stack>
    );
};

export default FilterChip;
