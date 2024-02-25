import { Stack } from '@mui/material';
import { FixedChip } from './FilterSort.styled';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import {
    removeBusFilter,
    removeSeatFilter,
} from '../../../app/features/busSearchSlice';
import { useAppSelector } from '../../../app/hooks';
import { useSearchParams } from 'react-router-dom';
import { filterValues } from '../../../config';

const FilterChip: React.FC = () => {
    const { t } = useTranslation('filterSort');
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const storedparams = useAppSelector((state) => state.busSearch);
    const busTypeParams =
        searchParams.get('busType') ?? storedparams.busType?.toString();
    const seatTypeParams =
        searchParams.get('seatType') ?? storedparams.seatType?.toString();

    return (
        <Stack spacing={1} direction="row">
            {busTypeParams && (
                <FixedChip
                    onDelete={() => {
                        searchParams.delete('busType');
                        setSearchParams(searchParams);
                        dispatch(removeBusFilter());
                    }}
                    label={
                        busTypeParams === filterValues.ac ? t('AC') : t('nonAC')
                    }
                />
            )}
            {seatTypeParams && (
                <FixedChip
                    onDelete={() => {
                        searchParams.delete('seatType');
                        setSearchParams(searchParams);
                        dispatch(removeSeatFilter());
                    }}
                    label={
                        seatTypeParams === filterValues.seater
                            ? t('seater')
                            : t('sleeper')
                    }
                />
            )}
        </Stack>
    );
};

export default FilterChip;
