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

interface IActionBarProps {
    showFilterSort?: boolean;
}

const ActionBar: React.FC<IActionBarProps> = ({
    showFilterSort,
}: IActionBarProps) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [startLocation, setStartLocation] = useState<ILocationOptions | null>(
        null
    );
    const [stopLocation, setStopLocation] = useState<ILocationOptions | null>(
        null
    );
    const [locOptions, setLocOptions] = useState<ILocationOptions[]>([]);

    const { t } = useTranslation('actionBar');
    const navigate = useNavigate();

    useEffect(() => {
        const originParam = searchParams.get('originID');
        const destinationParam = searchParams.get('destinationID');

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
        };

        getLocOptions().catch(() => {
            console.log('couldnt fetch location into locOptions');
        });
    }, [locOptions]);

    // setting start location
    const handleStartSelect = (
        _: React.SyntheticEvent,
        selectedValue: ILocationOptions | null
    ) => {
        if (selectedValue) {
            setStartLocation(selectedValue);
            searchParams.delete('originID');
            setSearchParams(searchParams);
            // searchParams.set('originID', selectedValue.id.toString());
            // setSearchParams(searchParams);
        }
    };

    // setting stop location
    const handleStopSelect = (
        _: React.SyntheticEvent,
        selectedValue: ILocationOptions | null
    ) => {
        if (selectedValue) {
            setStopLocation(selectedValue);
            searchParams.delete('destinationID');
            setSearchParams(searchParams);
            // searchParams.set('destinationID', selectedValue.id.toString());
            // setSearchParams(searchParams);
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

    // submit handler
    const searchBusHandler = () => {
        navigate(paths.tripsListing);
        // api call to get listing data
        // apply loading states
    };

    //display date
    function displayDate(value: Date | null) {
        console.log(value);
    }

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
                            options={locOptions.filter((loc) => {
                                return loc != stopLocation;
                            })}
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
                            options={locOptions.filter((loc) => {
                                return loc != startLocation;
                            })}
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
                        onChange={displayDate}
                    />
                </Grid>
            </Grid>

            {showFilterSort && <FilterSort />}

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
