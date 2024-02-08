import { Stack } from '@mui/material';
import { FixedChip } from './FilterSort.styled';
import { filterValues } from '../../../config';
import { useTranslation } from 'react-i18next';

interface IFilterChipProps {
    busTypeFilter: string | null;
    busFilterHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
    seatTypeFilter: string | null;
    seatFilterHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterChip: React.FC<IFilterChipProps> = ({
    busTypeFilter,
    busFilterHandler,
    seatTypeFilter,
    seatFilterHandler,
}: IFilterChipProps) => {
    const { t } = useTranslation('filterSort');
    return (
        <Stack spacing={1} direction="row">
            {busTypeFilter ? (
                <FixedChip
                    onDelete={busFilterHandler}
                    label={
                        busTypeFilter === filterValues.ac ? t('AC') : t('nonAC')
                    }
                />
            ) : (
                <></>
            )}
            {seatTypeFilter ? (
                <FixedChip
                    onDelete={seatFilterHandler}
                    label={
                        seatTypeFilter === filterValues.seater
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
