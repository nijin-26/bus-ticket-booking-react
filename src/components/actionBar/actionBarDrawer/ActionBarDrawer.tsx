import { Close, FilterAlt } from '@mui/icons-material';
import {
    Badge,
    Box,
    IconButton,
    SwipeableDrawer,
    useMediaQuery,
} from '@mui/material';
import { useState } from 'react';
import SortGroup from '../sortFilterRadioGroups/SortGroup';
import BusTypeGroup from '../sortFilterRadioGroups/BusTypeGroup';
import SeatTypeGroup from '../sortFilterRadioGroups/SeatTypeGroup';
import { FilterSortHeading, FilterSubHeading } from './ActionBarDrawerStyled';
import { useAppSelector } from '../../../app/hooks';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@emotion/react';
import FilterSortIcon from '../../../assets/FilterSortIcon';

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

    // conrol width
    const { breakpointValues, color } = useTheme();
    const isSmallScreen = useMediaQuery(
        `(max-width:${breakpointValues.small})`
    );
    const drawerWidth = isSmallScreen ? '100%' : 300;

    return (
        <Box>
            <IconButton
                onClick={toggleDrawer}
                color="primary"
                sx={{
                    padding: isSmallScreen ? '1rem' : '0',
                    margin: '2rem',
                    marginLeft: isSmallScreen ? 'auto' : '0',
                    marginRight: isSmallScreen ? '2rem' : '0',
                    position: isSmallScreen ? 'fixed' : 'relative',
                    bottom: isSmallScreen ? '2rem' : '',
                    right: isSmallScreen ? '1rem' : '',
                    background: isSmallScreen ? color.primary : 'none',
                    boxShadow: isSmallScreen
                        ? `0.2rem ${color.boxShadowPrimary}`
                        : 'none',
                    '&:hover': {
                        backgroundColor: isSmallScreen ? color.primary : 'none',
                        opacity: '1',
                        boxShadow: '0',
                    },
                    zIndex: '4',
                    borderRadius: '50%',
                }}
            >
                <Badge
                    color="success"
                    variant="dot"
                    overlap="circular"
                    invisible={Boolean(!busTypeParams && !seatTypeParams)}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                >
                    {isSmallScreen ? (
                        <FilterSortIcon />
                    ) : (
                        <FilterAlt
                            color="disabled"
                            sx={{ width: '4rem', height: '4rem' }}
                        />
                    )}
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
                    sx: { width: drawerWidth, p: '2rem' },
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

                {isSmallScreen && (
                    <>
                        <FilterSortHeading>{t('sort')}</FilterSortHeading>
                        <SortGroup />
                    </>
                )}
            </SwipeableDrawer>
        </Box>
    );
}
