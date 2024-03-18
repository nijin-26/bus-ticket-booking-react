import {
    Autocomplete,
    TextField,
    InputAdornment,
    Grid,
    Stack,
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
import { CenteredButton, Wrapper } from '../pnrSearch/PnrSearch.styled';
import { ILocationOptions } from '../types';
import { paths } from '../../../config';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getLocations } from '../../../api';
import { addDays } from 'date-fns';
import { useDispatch } from 'react-redux';
import { setBusSearchParams } from '../../../app/features/busSearchSlice';
import { ToggleButton } from './ActionBar.styled';
import { toast } from 'react-toastify';
import FilterSort from '../filterSort/FilterSort';

interface IActionBarProps {
    showFilterSort?: boolean;
}

const ActionBar: React.FC<IActionBarProps> = ({ showFilterSort }) => {
    const tomorrow = addDays(new Date(), 1);
    const [searchParams] = useSearchParams();
    const { t } = useTranslation('actionBar');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [startLocation, setStartLocation] = useState<ILocationOptions | null>(
        null
    );

    const [stopLocation, setStopLocation] = useState<ILocationOptions | null>(
        null
    );
    const [tripDate, setTripDate] = useState<Date | null>(tomorrow);
    const [locOptions, setLocOptions] = useState<ILocationOptions[]>([]);
    const [loadingState, setLoadingState] = useState<boolean>(false);
    const [toggle, setToggle] = useState(false);

    const originParam = searchParams.get('originId');
    const destinationParam = searchParams.get('destinationId');
    const tripDateParam = searchParams.get('tripDate');

    // setting origin and destination from query params
    const setParamOptions = (): void => {
        const originlocation = locOptions.find((opt) => {
            return opt.id == Number(originParam);
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
        if (tripDateParam) {
            const convDate = new Date(tripDateParam.replace('GMT ', 'GMT+'));
            setTripDate(convDate);
        }
    };

    // querying the locations
    const getLocOptions = async () => {
        const loc = await getLocations();
        const converterLoc = loc.map((locObj) => {
            return { id: Number(locObj.id), label: locObj.name };
        });
        setLocOptions(
            converterLoc.sort((a, b) => a.label.localeCompare(b.label))
        );
    };

    useEffect(() => {
        getLocOptions().catch(() => {
            toast.error('Failed to get locations');
        });
    }, []);

    // start, stop and date set once locations are loaded
    useEffect(() => {
        setParamOptions();
    }, [locOptions]);

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

            setToggle(!toggle);
        }
        if (startLocation && stopLocation) {
            const tempTo = stopLocation;

            setStopLocation(startLocation);
            setStartLocation(tempTo);

            setToggle(!toggle);
        }
    };

    // setting date
    function handleJourneyDate(value: Date | null) {
        setTripDate(value);
    }

    // submit handler
    const searchBusHandler = () => {
        if (startLocation && stopLocation && tripDate) {
            setLoadingState(true);
            dispatch(
                setBusSearchParams({
                    originId: startLocation.id,
                    destinationId: stopLocation.id,
                    tripDate: tripDate.toISOString(),
                })
            );

            navigate(
                `${paths.tripsListing}?originId=${
                    startLocation.id
                }&destinationId=${
                    stopLocation.id
                }&tripDate=${tripDate.toString()}`
            );
            setLoadingState(false);
        }
    };

    // filters selected location option
    const filterLocationOptions = (
        filter: ILocationOptions | null
    ): ILocationOptions[] => {
        return filter
            ? locOptions.filter(
                  (loc) => loc.id != filter.id || loc.label != filter.label
              )
            : locOptions;
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
                            options={filterLocationOptions(stopLocation)}
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
                                    autoFocus
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} sm="auto" textAlign="center">
                        <ToggleButton
                            className={toggle ? 'toggle' : 'reverse'}
                            aria-label="toggle"
                            sx={{
                                rotate: { xs: '90deg', sm: '0deg' },
                                height: '4rem',
                                width: '4rem',
                            }}
                            onClick={swapLocationOptions}
                        >
                            <SwapHoriz style={{ minWidth: '4rem' }} />
                        </ToggleButton>
                    </Grid>

                    <Grid item xs={12} sm>
                        <Autocomplete
                            fullWidth
                            options={filterLocationOptions(startLocation)}
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
                        value={tripDate}
                        minDate={tomorrow}
                        format="dd/MM/yyyy"
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

            <Stack
                direction={'row'}
                style={{ display: 'flex', alignItems: 'center' }}
            >
                {showFilterSort && <FilterSort />}
            </Stack>

            <CenteredButton
                variant="contained"
                disabled={!(startLocation && stopLocation && tripDate)}
                loading={loadingState}
                onClick={searchBusHandler}
                sx={{ mt: 2, textTransform: 'none' }}
                startIcon={<Search />}
            >
                {t('explore')}
            </CenteredButton>
        </Wrapper>
    );
};

export default ActionBar;
