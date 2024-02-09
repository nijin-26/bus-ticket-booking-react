import {
    Button,
    // FormControl,
    Menu,
    Stack,
    Radio,
    RadioGroup,
    Badge,
} from '@mui/material';
import React, { useState } from 'react';
import { Wrapper, StyledFormControlLabel } from './FilterSort.styled';
import {
    AcUnit,
    Air,
    AirlineSeatReclineNormal,
    Hotel,
} from '@mui/icons-material';
import { useTranslation } from 'react-i18next';
import { filterValues } from '../../../config';
import FilterChip from './FilterChip';

export default function FilterSort() {
    const { t } = useTranslation('filterSort');

    // anchor state
    const [busMenu, setBusMenu] = useState<null | HTMLElement>(null);
    const openBusTypeFilter = Boolean(busMenu);

    const [seatMenu, setSeatMenu] = useState<null | HTMLElement>(null);
    const openSeatTypeFilter = Boolean(seatMenu);

    const [sortMenu, setSortMenu] = useState<null | HTMLElement>(null);
    const openSort = Boolean(sortMenu);

    // applied filter states
    const [busTypeFilter, setBusTypeFilter] = useState<string | null>(null);
    const [seatTypeFilter, setSeatTypeFilter] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);

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

    // selection handlers
    const busFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (busTypeFilter === event.target.value) {
            setBusTypeFilter(null);
        } else {
            setBusTypeFilter(event.target.value);
        }
    };

    const seatFilterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (seatTypeFilter === event.target.value) {
            setSeatTypeFilter(null);
        } else {
            setSeatTypeFilter(event.target.value);
        }
    };

    const sortHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (sortBy === event.target.value) {
            setSortBy(null);
        } else {
            setSortBy(event.target.value);
        }
    };

    return (
        <>
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
                            aria-expanded={
                                openBusTypeFilter ? 'true' : undefined
                            }
                        >
                            {t('busType')}
                        </Button>
                        <Button
                            variant="outlined"
                            id="seat-type-button"
                            onClick={seatTypeHandler}
                            aria-controls={
                                openSeatTypeFilter
                                    ? 'seat-type-menu'
                                    : undefined
                            }
                            aria-haspopup="true"
                            aria-expanded={
                                openSeatTypeFilter ? 'true' : undefined
                            }
                        >
                            {t('seatType')}
                        </Button>
                        <Button
                            onClick={() => {
                                setBusTypeFilter(null);
                                setSeatTypeFilter(null);
                            }}
                        >
                            {t('clearAll')}
                        </Button>
                        <FilterChip
                            busTypeFilter={busTypeFilter}
                            busFilterHandler={busFilterHandler}
                            seatTypeFilter={seatTypeFilter}
                            seatFilterHandler={seatFilterHandler}
                        />
                    </Stack>
                    <Badge
                        invisible={Boolean(!sortBy)}
                        color="primary"
                        badgeContent=" "
                        variant="dot"
                    >
                        <Button variant="outlined" onClick={sortTypeHandler}>
                            {t('sort')}
                        </Button>
                    </Badge>
                </Stack>

                {/* Filters menu */}
                <Menu
                    id="bus-type-menu"
                    anchorEl={busMenu}
                    open={openBusTypeFilter}
                    MenuListProps={{ 'aria-labelledby': 'bus-type-button' }}
                    onClose={handleMenuClose}
                >
                    <RadioGroup
                        onChange={busFilterHandler}
                        value={busTypeFilter}
                    >
                        <StyledFormControlLabel
                            label={t('AC')}
                            control={
                                <Radio
                                    value={filterValues.ac}
                                    icon={<AcUnit />}
                                />
                            }
                        />
                        <StyledFormControlLabel
                            label={t('nonAC')}
                            control={
                                <Radio
                                    value={filterValues.nonAc}
                                    icon={<Air />}
                                />
                            }
                        />
                    </RadioGroup>
                    <Button
                        onClick={() => {
                            setBusTypeFilter(null);
                        }}
                    >
                        {t('clear')}
                    </Button>
                </Menu>
                <Menu
                    id="seat-type-menu"
                    anchorEl={seatMenu}
                    open={openSeatTypeFilter}
                    MenuListProps={{ 'aria-labelledby': 'seat-type-button' }}
                    onClose={handleMenuClose}
                >
                    <RadioGroup
                        onChange={seatFilterHandler}
                        value={seatTypeFilter}
                    >
                        <StyledFormControlLabel
                            label={t('seater')}
                            control={
                                <Radio
                                    value={filterValues.seater}
                                    icon={<AirlineSeatReclineNormal />}
                                />
                            }
                        />
                        <StyledFormControlLabel
                            label={t('sleeper')}
                            control={
                                <Radio
                                    value={filterValues.sleeper}
                                    icon={<Hotel />}
                                />
                            }
                        />
                    </RadioGroup>
                    <Button
                        onClick={() => {
                            setSeatTypeFilter(null);
                        }}
                    >
                        {t('clear')}
                    </Button>
                </Menu>

                {/* Sort menu */}
                <Menu
                    id="sort-menu"
                    anchorEl={sortMenu}
                    open={openSort}
                    MenuListProps={{ 'aria-labelledby': 'sort-button' }}
                    onClose={handleMenuClose}
                >
                    <RadioGroup onChange={sortHandler} value={sortBy}>
                        <StyledFormControlLabel
                            label={t('startDate')}
                            control={<Radio value="StartDate" />}
                        />
                        <StyledFormControlLabel
                            label={t('seatsAvailable')}
                            control={<Radio value="SeatsAvailable" />}
                        />
                        <StyledFormControlLabel
                            label={t('priceHighToLow')}
                            control={<Radio value="PriceHighToLow" />}
                        />
                        <StyledFormControlLabel
                            label={t('priceLowToHigh')}
                            control={<Radio value="PriceLowToHigh" />}
                        />
                    </RadioGroup>

                    <Button
                        onClick={() => {
                            setSortBy(null);
                        }}
                    >
                        {t('clear')}
                    </Button>
                </Menu>
            </Wrapper>
        </>
    );
}
