import {
    Stack,
    Autocomplete,
    TextField,
    InputAdornment,
    IconButton,
} from '@mui/material';
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
import FilterSort from '../filterSort/FilterSort';
import { CenteredButton, Wrapper } from '../pnrSearch/PnrSearch.styled';
import { ILocationOptions } from '../types';
import { locationOptions, paths } from '../../../config';
import { useNavigate } from 'react-router-dom';

interface IActionBarProps {
    showFilterSort?: boolean;
}

const ActionBar: React.FC<IActionBarProps> = ({
    showFilterSort,
}: IActionBarProps) => {
    const [startLocation, setStartLocation] = useState<
        ILocationOptions | undefined
    >(undefined);
    const [stopLocation, setStopLocation] = useState<
        ILocationOptions | undefined
    >(undefined);

    const navigate = useNavigate();

    // setting start location
    const handleStartSelect = (
        _: React.SyntheticEvent,
        selectedValue: ILocationOptions | null
    ) => {
        if (selectedValue) {
            setStartLocation(selectedValue);
        }
    };

    // setting stop location
    const handleStopSelect = (
        _: React.SyntheticEvent,
        selectedValue: ILocationOptions | null
    ) => {
        if (selectedValue) {
            setStopLocation(selectedValue);
        }
    };

    // submit handler
    const searchBusHandler = () => {
        navigate(paths.tripsListing);
        // api call to get listing data
        // apply loading states
    };

    return (
        <Wrapper>
            <Stack spacing={5} direction="row">
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
                        inputAdornment: {
                            position: 'start',
                        },
                    }}
                />
                <TextField
                    label="Passengers"
                    type="number"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <People />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>

            {showFilterSort ? <FilterSort /> : <></>}

            <CenteredButton
                variant="contained"
                onClick={searchBusHandler}
                sx={{ mt: 2 }}
                startIcon={<Search />}
            >
                Explore
            </CenteredButton>
        </Wrapper>
    );
};

export default ActionBar;
