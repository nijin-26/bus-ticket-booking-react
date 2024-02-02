import {
    Button,
    Chip,
    FormControl,
    Menu,
    Stack,
    Radio,
    RadioGroup,
} from '@mui/material';
import React, { useState } from 'react';
import { Wrapper, StyledFormControlLabel } from './FilterSort.styled';
import { AirlineSeatReclineNormal, Hotel } from '@mui/icons-material';

export default function FilterSort() {
    // anchor state
    const [anchorElBus, setAnchorElBus] = useState<null | HTMLElement>(null);
    const openBusTypeFilter = Boolean(anchorElBus);

    const [anchorElSeat, setAnchorElSeat] = useState<null | HTMLElement>(null);
    const openSeatTypeFilter = Boolean(anchorElSeat);

    // applied filter states
    const [busTypeFilter, setBusTypeFilter] = useState<string | null>(null);
    const [seatTypeFilter, setSeatTypeFilter] = useState<string | null>(null);
    console.log(busTypeFilter);

    // menu handlers
    const busTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElBus(event.currentTarget);
    };

    const seatTypeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorElSeat(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorElBus(null);
        setAnchorElSeat(null);
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

    return (
        <Wrapper>
            <Stack spacing={2} width="1200px" direction="row">
                <Stack spacing={1} direction="row">
                    {busTypeFilter ? (
                        <Chip
                            onDelete={busFilterHandler}
                            label={busTypeFilter}
                        />
                    ) : (
                        <></>
                    )}
                    {seatTypeFilter ? (
                        <Chip
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
                    aria-expanded={openBusTypeFilter ? 'true' : undefined}
                >
                    Bus type
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

            {/* menu */}
            <Menu
                id="bus-type-menu"
                anchorEl={anchorElBus}
                open={openBusTypeFilter}
                MenuListProps={{ 'aria-labelledby': 'bus-type-button' }}
                onClose={handleMenuClose}
            >
                <FormControl>
                    <RadioGroup
                        onChange={busFilterHandler}
                        value={busTypeFilter}
                    >
                        <StyledFormControlLabel
                            label="AC"
                            control={<Radio value="AC" />}
                        />
                        <StyledFormControlLabel
                            label="Non-AC"
                            control={<Radio value="Non-AC" />}
                        />
                    </RadioGroup>
                </FormControl>
                <Button>Clear</Button>
            </Menu>
            <Menu
                id="seat-type-menu"
                anchorEl={anchorElSeat}
                open={openSeatTypeFilter}
                MenuListProps={{ 'aria-labelledby': 'seat-type-button' }}
                onClose={handleMenuClose}
            >
                <RadioGroup onChange={seatFilterHandler} value={seatTypeFilter}>
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
                <Button>Clear</Button>
            </Menu>
        </Wrapper>
    );
}
