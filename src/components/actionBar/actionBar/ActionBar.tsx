import {
    Stack,
    Autocomplete,
    TextField,
    InputAdornment,
    IconButton,
    Button,
    Chip,
    Menu,
    MenuItem,
} from '@mui/material';
import { LoadingButton } from '@mui/lab';
import {
    PanoramaFishEyeSharp,
    FmdGood,
    Today,
    People,
    Search,
    SwapHoriz,
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react';

interface IActionBarProps {
    showFilterSort?: boolean;
}

// interface in the mui format
interface ILocationOptions {
    id: number;
    label: string;
}

const ActionBar: React.FC<IActionBarProps> = ({
    showFilterSort,
}: IActionBarProps) => {
    // api format: id, name => mui format: id, label
    const locationOptions: ILocationOptions[] = [
        { id: 1, label: 'Trivandrum' },
        { id: 2, label: 'Chennai' },
        { id: 3, label: 'Bangalore' },
        { id: 4, label: 'Pune' },
        { id: 5, label: 'Mumbai' },
        { id: 5, label: 'Ahmedabad' },
        { id: 5, label: 'Lucknow' },
    ];

    const [startLocation, setStartLocation] = useState<
        ILocationOptions | undefined
    >(undefined);
    const [stopLocation, setStopLocation] = useState<
        ILocationOptions | undefined
    >(undefined);

    // anchor state
    const [anchorElBus, setAnchorElBus] = useState<null | HTMLElement>(null);
    const openBusTypeFilter = Boolean(anchorElBus);

    const [anchorElSeat, setAnchorElSeat] = useState<null | HTMLElement>(null);
    const openSeatTypeFilter = Boolean(anchorElSeat);

    // setting start location
    const handleStartSelect = (
        event: React.SyntheticEvent,
        selectedValue: ILocationOptions | null
    ) => {
        if (selectedValue) {
            setStartLocation(selectedValue);
        }
    };

    // setting stop location
    const handleStopSelect = (
        event: React.SyntheticEvent,
        selectedValue: ILocationOptions | null
    ) => {
        if (selectedValue) {
            setStopLocation(selectedValue);
        }
    };

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

    // submit handler
    const searchBusHandler = () => {
        // submittable object
        // api call to get listing data
        // apply loading states
    };

    return (
        <>
            <Stack spacing={5} width="1200px" direction="row">
                <Stack spacing={1} width="1000px" direction="row">
                    <Autocomplete
                        fullWidth
                        options={locationOptions.filter((loc) => {
                            return loc != stopLocation;
                        })}
                        onChange={handleStartSelect}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="From"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <>
                                            <InputAdornment position="start">
                                                <PanoramaFishEyeSharp />
                                            </InputAdornment>
                                            {params.InputProps.startAdornment}
                                        </>
                                    ),
                                }}
                            />
                        )}
                    ></Autocomplete>
                    <IconButton>
                        <SwapHoriz />
                    </IconButton>
                    <Autocomplete
                        fullWidth
                        options={locationOptions.filter((loc) => {
                            return loc != startLocation;
                        })}
                        onChange={handleStopSelect}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="To"
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <>
                                            <InputAdornment position="start">
                                                <FmdGood />
                                            </InputAdornment>
                                            {params.InputProps.startAdornment}
                                        </>
                                    ),
                                }}
                            />
                        )}
                    ></Autocomplete>
                </Stack>
                <DatePicker
                    label="Date"
                    slots={{
                        openPickerIcon: Today,
                    }}
                    slotProps={{
                        // textField: {
                        //     fullWidth: true,
                        // },
                        inputAdornment: {
                            position: 'start',
                        },
                    }}
                />
                <TextField
                    label="Passengers"
                    type="number"
                    // fullWidth
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <People />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            <Stack spacing={5} width="1200px" direction="row">
                <Stack>
                    <Chip></Chip>
                </Stack>
                <Button
                    variant="outlined"
                    id="bus-type-button"
                    onClick={busTypeHandler}
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
                <Button>Clear all</Button>
            </Stack>

            <Menu
                id="bus-type-menu"
                anchorEl={anchorElBus}
                open={openBusTypeFilter}
                MenuListProps={{ 'aria-labelledby': 'bus-type-button' }}
                onClose={handleMenuClose}
            >
                <MenuItem>AC</MenuItem>
                <MenuItem>Non-AC</MenuItem>
            </Menu>

            <Menu
                id="seat-type-menu"
                anchorEl={anchorElSeat}
                open={openSeatTypeFilter}
                MenuListProps={{ 'aria-labelledby': 'seat-type-button' }}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={handleMenuClose}>Seater</MenuItem>
                <MenuItem onClick={handleMenuClose}>Sleeper </MenuItem>
            </Menu>

            <LoadingButton
                variant="contained"
                onClick={searchBusHandler}
                sx={{ mt: 2 }}
                startIcon={<Search />}
            >
                Explore
            </LoadingButton>
        </>
    );
};

export default ActionBar;
