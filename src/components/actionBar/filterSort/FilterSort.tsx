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
import {
    Wrapper,
    StyledFormControlLabel,
    FixedChip,
} from './FilterSort.styled';
import {
    AcUnit,
    Air,
    AirlineSeatReclineNormal,
    Hotel,
} from '@mui/icons-material';

export default function FilterSort() {
    // anchor state
    const [anchorElBus, setAnchorElBus] = useState<null | HTMLElement>(null);
    const openBusTypeFilter = Boolean(anchorElBus);

    const [anchorElSeat, setAnchorElSeat] = useState<null | HTMLElement>(null);
    const openSeatTypeFilter = Boolean(anchorElSeat);

    const [anchorElSort, setAnchorElSort] = useState<null | HTMLElement>(null);
    const openSort = Boolean(anchorElSort);

    // applied filter states
    const [busTypeFilter, setBusTypeFilter] = useState<string | null>(null);
    const [seatTypeFilter, setSeatTypeFilter] = useState<string | null>(null);
    const [sortBy, setSortBy] = useState<string | null>(null);

    // menu handlers
    const busTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElBus(event.currentTarget);
    };

    const seatTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElSeat(event.currentTarget);
    };

    const sortTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElSort(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorElBus(null);
        setAnchorElSeat(null);
        setAnchorElSort(null);
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
                    <Stack spacing={2} width="1200px" direction="row">
                        <Stack spacing={1} direction="row">
                            {busTypeFilter ? (
                                <FixedChip
                                    onDelete={busFilterHandler}
                                    label={busTypeFilter}
                                />
                            ) : (
                                <></>
                            )}
                            {seatTypeFilter ? (
                                <FixedChip
                                    onDelete={seatFilterHandler}
                                    label={seatTypeFilter}
                                />
                            ) : (
                                <></>
                            )}
                        </Stack>
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
                            Bus type
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
                            Seat type
                        </Button>
                        <Button
                            onClick={() => {
                                setBusTypeFilter(null);
                                setSeatTypeFilter(null);
                            }}
                        >
                            Clear all
                        </Button>
                    </Stack>
                    <Badge
                        invisible={Boolean(!sortBy)}
                        color="primary"
                        badgeContent=" "
                        variant="dot"
                    >
                        <Button variant="outlined" onClick={sortTypeHandler}>
                            Sort
                        </Button>
                    </Badge>
                </Stack>

                {/* Filters menu */}
                <Menu
                    id="bus-type-menu"
                    anchorEl={anchorElBus}
                    open={openBusTypeFilter}
                    MenuListProps={{ 'aria-labelledby': 'bus-type-button' }}
                    onClose={handleMenuClose}
                >
                    {/* <FormControl> */}
                    <RadioGroup
                        onChange={busFilterHandler}
                        value={busTypeFilter}
                    >
                        <StyledFormControlLabel
                            label="AC"
                            control={<Radio value="AC" icon={<AcUnit />} />}
                        />
                        <StyledFormControlLabel
                            label="Non-AC"
                            control={<Radio value="Non-AC" icon={<Air />} />}
                        />
                    </RadioGroup>
                    {/* </FormControl> */}
                    <Button
                        onClick={() => {
                            setBusTypeFilter(null);
                        }}
                    >
                        Clear
                    </Button>
                </Menu>
                <Menu
                    id="seat-type-menu"
                    anchorEl={anchorElSeat}
                    open={openSeatTypeFilter}
                    MenuListProps={{ 'aria-labelledby': 'seat-type-button' }}
                    onClose={handleMenuClose}
                >
                    <RadioGroup
                        onChange={seatFilterHandler}
                        value={seatTypeFilter}
                    >
                        <StyledFormControlLabel
                            label="Seater"
                            control={
                                <Radio
                                    value="Seater"
                                    icon={<AirlineSeatReclineNormal />}
                                />
                            }
                        />
                        <StyledFormControlLabel
                            label="Sleeper"
                            control={<Radio value="Sleeper" icon={<Hotel />} />}
                        />
                    </RadioGroup>
                    <Button
                        onClick={() => {
                            setSeatTypeFilter(null);
                        }}
                    >
                        Clear
                    </Button>
                </Menu>

                {/* Sort menu */}
                <Menu
                    id="sort-menu"
                    anchorEl={anchorElSort}
                    open={openSort}
                    MenuListProps={{ 'aria-labelledby': 'sort-button' }}
                    onClose={handleMenuClose}
                >
                    <RadioGroup onChange={sortHandler} value={sortBy}>
                        <StyledFormControlLabel
                            label="Start date"
                            control={<Radio value="StartDate" />}
                        />
                        <StyledFormControlLabel
                            label="Seats available"
                            control={<Radio value="SeatsAvailable" />}
                        />
                        <StyledFormControlLabel
                            label="Price: high to low"
                            control={<Radio value="PriceHighToLow" />}
                        />
                        <StyledFormControlLabel
                            label="Price: low to high"
                            control={<Radio value="PriceLowToHigh" />}
                        />
                    </RadioGroup>

                    <Button
                        onClick={() => {
                            setSortBy(null);
                        }}
                    >
                        Clear
                    </Button>
                </Menu>
            </Wrapper>
        </>
    );
}
