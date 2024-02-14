import { FilterAlt } from '@mui/icons-material';
import { Box, IconButton, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import SortGroup from '../sortFilterRadioGroups/SortGroup';
import BusTypeGroup from '../sortFilterRadioGroups/BusTypeGroup';
import SeatTypeGroup from '../sortFilterRadioGroups/SeatTypeGroup';
import { FilterSortHeading, FilterSubHeading } from './ActionBarDrawerStyled';

export default function ActionBarDrawer() {
    const [drawer, setDrawer] = useState(false);

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
                <FilterAlt sx={{ width: '4rem', height: '4rem' }} />
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
                <FilterSortHeading>Filter</FilterSortHeading>
                <FilterSubHeading>Bus type</FilterSubHeading>
                <BusTypeGroup />
                <FilterSubHeading>Seat type</FilterSubHeading>
                <SeatTypeGroup />

                <FilterSortHeading>Sort</FilterSortHeading>
                <SortGroup />
            </SwipeableDrawer>
        </Box>
    );
}
