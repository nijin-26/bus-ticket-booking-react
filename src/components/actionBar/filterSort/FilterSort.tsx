import { Wrapper } from './FilterSort.styled';
import { useTranslation } from 'react-i18next';
import FilterChip from './FilterChip';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    removeBusFilter,
    removeSeatFilter,
} from '../../../app/features/busSearchSlice';
import ActionBarDrawer from '../actionBarDrawer/ActionBarDrawer';
import Sort from './Sort';
import { Button, Stack } from '@mui/material';

export default function FilterSort() {
    const { t } = useTranslation('filterSort');
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <Stack
                direction="row"
                style={{ width: '1', display: 'flex', alignItems: 'center' }}
            >
                <Stack
                    spacing={1}
                    width="120rem"
                    direction="row"
                    sx={{ displayPrint: 'flex', alignItems: 'center' }}
                >
                    {/* filters */}
                    <ActionBarDrawer />

                    <Button
                        style={{ textTransform: 'none' }}
                        onClick={() => {
                            searchParams.delete('seatType');
                            setSearchParams(searchParams);
                            searchParams.delete('busType');
                            setSearchParams(searchParams);
                            dispatch(removeSeatFilter());
                            dispatch(removeBusFilter());
                        }}
                    >
                        {t('clearAll')}
                    </Button>

                    <FilterChip />
                </Stack>
                {/* sort */}
                <Sort />
            </Stack>
        </Wrapper>
    );
}
