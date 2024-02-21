import {
    Button,
    // FormControl,
    Menu,
    Stack,
    Badge,
} from '@mui/material';
import React, { useState } from 'react';
import { Wrapper } from './FilterSort.styled';
import { useTranslation } from 'react-i18next';
import SortGroup from '../sortFilterRadioGroups/SortGroup';
import BusTypeGroup from '../sortFilterRadioGroups/BusTypeGroup';
import SeatTypeGroup from '../sortFilterRadioGroups/SeatTypeGroup';
import FilterChip from './FilterChip';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    removeBusFilter,
    removeSeatFilter,
} from '../../../app/features/busSearchSlice';

// filter chip to be incorporated after setting filter state in store
// import FilterChip from './FilterChip';

export default function FilterSort() {
    const { t } = useTranslation('filterSort');
    const [searchParams, setSearchParams] = useSearchParams();
    const dispatch = useDispatch();

    // anchor state
    const [busMenu, setBusMenu] = useState<null | HTMLElement>(null);
    const openBusTypeFilter = Boolean(busMenu);

    const [seatMenu, setSeatMenu] = useState<null | HTMLElement>(null);
    const openSeatTypeFilter = Boolean(seatMenu);

    const [sortMenu, setSortMenu] = useState<null | HTMLElement>(null);
    const openSort = Boolean(sortMenu);

    // menu handlers
    const busTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setBusMenu(event.currentTarget);
    };

    const seatTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSeatMenu(event.currentTarget);
    };

    const sortTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSortMenu(event.currentTarget);
    };

    const handleMenuClose = () => {
        setBusMenu(null);
        setSeatMenu(null);
        setSortMenu(null);
    };

    return (
        <Wrapper>
            <Stack spacing={2} direction="row">
                <Stack
                    spacing={2}
                    width="120rem"
                    direction="row"
                    sx={{ displayPrint: 'flex', alignItems: 'center' }}
                >
                    <Button
                        variant="outlined"
                        id="bus-type-button"
                        onClick={busTypeHandler}
                        aria-describedby="bus-type-menu"
                        aria-controls={
                            openBusTypeFilter ? 'bus-type-menu' : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={openBusTypeFilter ? 'true' : undefined}
                    >
                        {t('busType')}
                    </Button>
                    <Button
                        variant="outlined"
                        id="seat-type-button"
                        onClick={seatTypeHandler}
                        aria-controls={
                            openSeatTypeFilter ? 'seat-type-menu' : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={openSeatTypeFilter ? 'true' : undefined}
                    >
                        {t('seatType')}
                    </Button>
                    <Button
                        onClick={() => {
                            //setBusTypeFilter(null);
                            //setSeatTypeFilter(null);
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

                <Button variant="outlined" onClick={sortTypeHandler}>
                    {t('sort')}
                </Button>
            </Stack>

            {/* Filters menu */}
            <Menu
                id="bus-type-menu"
                anchorEl={busMenu}
                open={openBusTypeFilter}
                MenuListProps={{ 'aria-labelledby': 'bus-type-button' }}
                onClose={handleMenuClose}
            >
                <BusTypeGroup />
            </Menu>
            <Menu
                id="seat-type-menu"
                anchorEl={seatMenu}
                open={openSeatTypeFilter}
                MenuListProps={{ 'aria-labelledby': 'seat-type-button' }}
                onClose={handleMenuClose}
            >
                <SeatTypeGroup />
            </Menu>

            {/* Sort menu */}
            <Menu
                id="sort-menu"
                anchorEl={sortMenu}
                open={openSort}
                MenuListProps={{ 'aria-labelledby': 'sort-button' }}
                onClose={handleMenuClose}
            >
                <SortGroup />
            </Menu>
        </Wrapper>
    );
}
