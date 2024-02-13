import { Menu } from '@mui/icons-material';
import { Box, IconButton, SwipeableDrawer } from '@mui/material';
import { useState } from 'react';
import SortGroup from '../sortFilterRadioGroups/SortGroup';
import BusTypeGroup from '../sortFilterRadioGroups/BusTypeGroup';
import SeatTypeGroup from '../sortFilterRadioGroups/SeatTypeGroup';

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
            <IconButton onClick={toggleDrawer}>
                <Menu />
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
                <h3>Filter</h3>
                <p>Bus type</p>
                <BusTypeGroup />
                <p>Seat type</p>
                <SeatTypeGroup />

                <h3>Sort</h3>
                <SortGroup />
            </SwipeableDrawer>
        </Box>
    );
}
