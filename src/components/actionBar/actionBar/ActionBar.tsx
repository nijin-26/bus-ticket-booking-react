import {
    Autocomplete,
    TextField,
    InputAdornment,
    IconButton,
    Grid,
} from '@mui/material';

import {
    FmdGood,
    Today,
    Search,
    SwapHoriz,
    TripOrigin,
} from '@mui/icons-material';
import { DatePicker } from '@mui/x-date-pickers';
import React, { useEffect, useState } from 'react';
import FilterSort from '../filterSort/FilterSort';
import { CenteredButton, Wrapper } from '../pnrSearch/PnrSearch.styled';
import { ILocationOptions } from '../types';
import { paths } from '../../../config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocations } from '../../../api';
import { addDays } from 'date-fns';
import { useDispatch } from 'react-redux';
import { setBusSearchParams } from '../../../app/features/busSearchSlice';

interface IActionBarProps {
    showFilterSort?: boolean;
}

const ActionBar: React.FC<IActionBarProps> = ({
    showFilterSort,
}: IActionBarProps) => {
    const tomorrow = addDays(new Date(), 1);
    const [searchParams, setSearchParams] = useSearchParams();
    const [startLocation, setStartLocation] = useState<ILocationOptions | null>(
        null
    );
    const [stopLocation, setStopLocation] = useState<ILocationOptions | null>(
        null
    );
    const [tripDate, setTripDate] = useState<Date | null>(tomorrow);
    const [locOptions, setLocOptions] = useState<ILocationOptions[]>([]);
    const { t } = useTranslation('actionBar');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const originParam = searchParams.get('originID');
        const destinationParam = searchParams.get('destinationID');
        const tripDateParam = searchParams.get('tripDate');

        const getLocOptions = async () => {
            try {
                const loc = await getLocations();
                const converterLoc = loc.map((locObj) => {
                    return { id: Number(locObj.id), label: locObj.name };
                });
                setLocOptions(converterLoc);
                setParamOptions();
            } catch (err) {
                // show error
                console.log('There is an error', err);
            }
        };

        // setting origin and destination from query params
        const setParamOptions = () => {
            const originlocation = locOptions.find((opt) => {
                return opt.id === Number(originParam);
            });
            const destinationlocation = locOptions.find((opt) => {
                return opt.id === Number(destinationParam);
            });

            if (originlocation) {
                setStartLocation(originlocation);
            }
            if (destinationlocation) {
                setStopLocation(destinationlocation);
            }
            if (tripDate && tripDateParam) {
                const date = tripDate.toUTCString();
                const convDate = new Date(date);
                setTripDate(convDate);
            }
        };

        getLocOptions().catch(() => {
            console.log('couldnt fetch location into locOptions');
        });
    }, []);

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

    // swap to and from locations
    const swapLocationOptions = () => {
        if (startLocation && stopLocation) {
            const tempTo = stopLocation;

            setStopLocation(startLocation);
            setStartLocation(tempTo);
        }
    };

    // setting date
    function handleJourneyDate(value: Date | null) {
        setTripDate(value);
    }

    // submit handler
    const searchBusHandler = () => {
        dispatch(
            setBusSearchParams({
                originID: startLocation?.id,
                destinationID: stopLocation?.id,
                tripDate: tripDate,
            })
        );
        navigate(paths.tripsListing);
    };

    return (
        <Wrapper>
            <Grid container spacing={2}>
                <Grid
                    item
                    container
                    xs={12}
                    md={9}
                    spacing={0.5}
                    alignItems="center"
                >
                    <Grid item xs={12} sm>
                        <Autocomplete
                            fullWidth
                            options={
                                stopLocation
                                    ? locOptions.filter(
                                          (loc) =>
                                              loc.id != stopLocation.id ||
                                              loc.label != stopLocation.label
                                      )
                                    : locOptions
                            }
                            value={startLocation}
                            onChange={handleStartSelect}
                            isOptionEqualToValue={(option, value) =>
                                option.id === value.id
                            }
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
                                                {
                                                    params.InputProps
                                                        .startAdornment
                                                }
                                            </>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} sm="auto" textAlign="center">
                        <IconButton
                            sx={{
                                rotate: { xs: '90deg', sm: '0deg' },
                                height: '4rem',
                                width: '4rem',
                            }}
                            onClick={swapLocationOptions}
                        >
                            <SwapHoriz style={{ minWidth: '4rem' }} />
                        </IconButton>
                    </Grid>

                    <Grid item xs={12} sm>
                        <Autocomplete
                            fullWidth
                            options={
                                startLocation
                                    ? locOptions.filter(
                                          (loc) =>
                                              loc.id != startLocation.id ||
                                              loc.label != startLocation.label
                                      )
                                    : locOptions
                            }
                            value={stopLocation}
                            onChange={handleStopSelect}
                            isOptionEqualToValue={(option, value) =>
                                option.id === value.id
                            }
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
                                                {
                                                    params.InputProps
                                                        .startAdornment
                                                }
                                            </>
                                        ),
                                    }}
                                />
                            )}
                        />
                    </Grid>
                </Grid>

                <Grid item xs={12} md={3}>
                    <DatePicker
                        label={t('date')}
                        disablePast
                        defaultValue={tripDate}
                        minDate={tomorrow}
                        slots={{
                            openPickerIcon: Today,
                        }}
                        slotProps={{
                            inputAdornment: {
                                position: 'start',
                                sx: { pl: '0.5rem' },
                            },
                        }}
                        sx={{ width: '100%' }}
                        onChange={handleJourneyDate}
                    />
                </Grid>
            </Grid>

            {showFilterSort && <FilterSort />}

            <CenteredButton
                variant="contained"
                disabled={
                    startLocation && stopLocation && tripDate ? false : true
                }
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
