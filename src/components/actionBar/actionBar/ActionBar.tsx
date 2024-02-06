import {
    Stack,
    Autocomplete,
    TextField,
    InputAdornment,
    IconButton,
} from '@mui/material';
import {
    FmdGood,
    Today,
    People,
    Search,
    SwapHoriz,
    TripOrigin,
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import React, { useState } from 'react';
import FilterSort from '../filterSort/FilterSort';
import { CenteredButton, Wrapper } from '../pnrSearch/PnrSearch.styled';
import { ILocationOptions } from '../types';
import { locationOptions } from '../../../config';
import { useTranslation } from 'react-i18next';

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

    const { t } = useTranslation('actionBar');

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

    // submit handler
    const searchBusHandler = () => {
        // api call to get listing data
        // apply loading states
    };

    return (
        <Wrapper>
            <Stack spacing={5} direction="row">
                <Stack spacing={0} width="1000px" direction="row">
                    <Autocomplete
                        fullWidth
                        options={locationOptions.filter((loc) => {
                            return loc != stopLocation;
                        })}
                        onChange={handleStartSelect}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label={t('from')}
                                InputProps={{
                                    ...params.InputProps,
                                    startAdornment: (
                                        <>
                                            <InputAdornment position="start">
                                                <TripOrigin />
                                            </InputAdornment>
                                            {params.InputProps.startAdornment}
                                        </>
                                    ),
                                }}
                            />
                        )}
                    ></Autocomplete>
                    <IconButton>
                        <SwapHoriz style={{ minWidth: '40px' }} />
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
                                label={t('to')}
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
                    label={t('date')}
                    slots={{
                        openPickerIcon: Today,
                    }}
                    slotProps={{
                        inputAdornment: {
                            position: 'start',
                            sx: { pl: '5px' },
                        },
                    }}
                />
                <TextField
                    label={t('passengers')}
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
                {t('explore')}
            </CenteredButton>
        </Wrapper>
    );
};

export default ActionBar;
