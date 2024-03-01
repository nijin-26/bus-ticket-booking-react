import { Close, FilterAlt } from '@mui/icons-material';
import { Badge, Box, IconButton, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import SortGroup from '../sortFilterRadioGroups/SortGroup';
import BusTypeGroup from '../sortFilterRadioGroups/BusTypeGroup';
import SeatTypeGroup from '../sortFilterRadioGroups/SeatTypeGroup';
import { FilterSortHeading, FilterSubHeading } from './ActionBarDrawerStyled';
import { useAppSelector } from '../../../app/hooks';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function ActionBarDrawer() {
    const [drawer, setDrawer] = useState(false);
    const [searchParams] = useSearchParams();
    const { t } = useTranslation('filterSort');
    const storedparams = useAppSelector((state) => state.busSearch);
    const busTypeParams =
        searchParams.get('busType') ?? storedparams.busType?.toString();
    const seatTypeParams =
        searchParams.get('seatType') ?? storedparams.seatType?.toString();

    // for performance of swipeAbleDrawr on ios which already has swipe to go back feature
    const iOS =
        typeof navigator !== 'undefined' &&
        /iPad|iPhone|iPod/.test(navigator.userAgent);

    // for toggling drawer
    const toggleDrawer = () => {
        drawer ? setDrawer(false) : setDrawer(true);
    };

    return (
        <Box>
            <IconButton
                onClick={toggleDrawer}
                sx={{ padding: '1rem', margin: '2rem' }}
            >
                <Badge
                    color="primary"
                    variant="dot"
                    overlap="circular"
                    invisible={Boolean(!busTypeParams && !seatTypeParams)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    <FilterAlt
                        color="disabled"
                        sx={{ width: '4rem', height: '4rem' }}
                    />
                </Badge>
            </IconButton>

            <SwipeableDrawer
                anchor="left"
                open={drawer}
                onClose={toggleDrawer}
                onOpen={toggleDrawer}
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                PaperProps={{
                    sx: { width: '100%', p: '2rem' },
                }}
            >
                <IconButton
                    sx={{
                        width: '4rem',
                        height: '4rem',
                        marginLeft: 'auto',
                        marginRight: '2rem',
                    }}
                    onClick={toggleDrawer}
                >
                    <Close />
                </IconButton>
                <FilterSortHeading>{t('filter')}</FilterSortHeading>
                <FilterSubHeading>{t('busType')}</FilterSubHeading>
                <BusTypeGroup />
                <FilterSubHeading>{t('seatType')}</FilterSubHeading>
                <SeatTypeGroup />

                <FilterSortHeading>{t('sort')}</FilterSortHeading>
                <SortGroup />
            </SwipeableDrawer>
        </Box>
    );
}
