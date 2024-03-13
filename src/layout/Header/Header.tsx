import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useTheme } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleTheme } from '../../app/features/themeSlice';
import { logout, showAuthModal } from '../../app/features/authSlice';
import {
    Box,
    AppBar,
    Button,
    Link,
    Menu,
    MenuItem,
    Typography,
    IconButton,
    ListItemIcon,
    Divider,
    useMediaQuery,
} from '@mui/material';
import { toast } from 'react-toastify';
import { ConfirmDialog, FullScreenLoader } from '../../components';
import { StyledProfileButton, StyledToolBar } from './Header.styled';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import { BackupTable, PeopleAlt } from '@mui/icons-material';
import { paths } from '../../config';
import { EUserRole } from '../../types';
import { signOut } from '../../api';

export const Header = () => {
    const { t } = useTranslation(['headerFooter', 'logoutConfirmationModal']);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const theme = useTheme();

    const isSmallScreen = useMediaQuery(
        `(max-width:${theme.breakpointValues.small})`
    );

    const themeMode = useAppSelector((state) => state.theme.currentTheme);
    const user = useAppSelector((state) => state.auth.user);

    const [logoutLoading, setLogoutLoading] = useState(false);

    const [isLogoutModalDisplayed, setIsLogoutModalDisplayed] =
        useState<boolean>(false);

    const [menuAnchorElement, setMenuAnchorElement] =
        useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(menuAnchorElement);

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorElement(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setMenuAnchorElement(null);
    };

    const handleThemeClick = () => {
        dispatch(toggleTheme());
    };

    const handleLogoutClick = async () => {
        setLogoutLoading(true);
        try {
            await signOut();
        } catch (error) {
            console.error('logout error : ', error);
        } finally {
            navigate(paths.home);
            dispatch(logout());
            handleCloseUserMenu();
            setLogoutLoading(false);
            toast.success(t('logoutConfirmationModal:logoutSuccessMessage'));
        }
    };

    return (
        <>
            <AppBar position="sticky">
                <StyledToolBar>
                    <Link
                        href="/"
                        variant="h5"
                        color="inherit"
                        underline="none"
                    >
                        <Box display="flex" alignItems="center">
                            <DirectionsBusRoundedIcon
                                fontSize="large"
                                className="app-logo"
                            />
                            Bustle
                        </Box>
                    </Link>
                    <Box>
                        <IconButton
                            onClick={handleThemeClick}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            className="theme-button"
                        >
                            {themeMode.toString() === 'dark' ? (
                                <LightModeRoundedIcon />
                            ) : (
                                <DarkModeRoundedIcon />
                            )}
                        </IconButton>
                        {user ? (
                            <>
                                <StyledProfileButton
                                    id="profile-button"
                                    aria-controls={
                                        isMenuOpen ? 'profile-menu' : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={
                                        isMenuOpen ? 'true' : undefined
                                    }
                                    onClick={handleOpenUserMenu}
                                    sx={{ textTransform: 'none' }}
                                    startIcon={<PersonIcon />}
                                    endIcon={<KeyboardArrowDownIcon />}
                                    variant="outlined"
                                >
                                    {!isSmallScreen && (
                                        <Typography variant="body2">
                                            {user.fullName}
                                        </Typography>
                                    )}
                                </StyledProfileButton>
                                <Menu
                                    id="profile-menu"
                                    keepMounted
                                    anchorEl={menuAnchorElement}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(menuAnchorElement)}
                                    onClose={handleCloseUserMenu}
                                    MenuListProps={{
                                        'aria-labelledby': 'profile-button',
                                    }}
                                    sx={{ mt: '5px' }}
                                >
                                    {isSmallScreen && (
                                        <li>
                                            <Typography
                                                textAlign="center"
                                                px={2}
                                                pb={1.5}
                                                pt={1}
                                            >
                                                {t('greetingText')}{' '}
                                                {user.fullName}!
                                            </Typography>
                                            <Divider />
                                        </li>
                                    )}
                                    {user.role === EUserRole.ADMIN && (
                                        <MenuItem
                                            onClick={() => {
                                                navigate(paths.usersListing);
                                                handleCloseUserMenu();
                                            }}
                                        >
                                            <ListItemIcon>
                                                <PeopleAlt fontSize="small" />
                                            </ListItemIcon>
                                            <Typography
                                                variant="body2"
                                                textAlign="center"
                                            >
                                                {t('allUsers')}
                                            </Typography>
                                        </MenuItem>
                                    )}
                                    <MenuItem
                                        onClick={() => {
                                            navigate(paths.myBookings);
                                            handleCloseUserMenu();
                                        }}
                                    >
                                        <ListItemIcon>
                                            <PermContactCalendarIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography
                                            variant="body2"
                                            textAlign="center"
                                        >
                                            {t('myBookings')}
                                        </Typography>
                                    </MenuItem>
                                    {user.role === EUserRole.ADMIN && (
                                        <MenuItem
                                            onClick={() => {
                                                navigate(paths.bookings);
                                                handleCloseUserMenu();
                                            }}
                                        >
                                            <ListItemIcon>
                                                <BackupTable fontSize="small" />
                                            </ListItemIcon>
                                            <Typography
                                                variant="body2"
                                                textAlign="center"
                                            >
                                                {t('allBookings')}
                                            </Typography>
                                        </MenuItem>
                                    )}
                                    <MenuItem
                                        onClick={() => {
                                            setIsLogoutModalDisplayed(true);
                                            handleCloseUserMenu();
                                        }}
                                    >
                                        <ListItemIcon>
                                            <ExitToAppIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography
                                            variant="body2"
                                            textAlign="center"
                                        >
                                            {t('logout')}
                                        </Typography>
                                    </MenuItem>
                                </Menu>
                            </>
                        ) : (
                            <Button
                                onClick={() => dispatch(showAuthModal())}
                                variant="contained"
                                color="secondary"
                                size="small"
                                sx={{ textTransform: 'none' }}
                            >
                                {t('login')}
                            </Button>
                        )}
                    </Box>
                </StyledToolBar>
            </AppBar>
            <ConfirmDialog
                title={t('logoutConfirmationModal:title')}
                open={isLogoutModalDisplayed}
                handleClose={() => {
                    setIsLogoutModalDisplayed(false);
                }}
                agreeText={t('logoutConfirmationModal:confirmText')}
                disagreeText={t('logoutConfirmationModal:cancelText')}
                handleAgreeFunction={() => void handleLogoutClick()}
            >
                {t('logoutConfirmationModal:message')}
            </ConfirmDialog>
            <FullScreenLoader open={logoutLoading} />
        </>
    );
};
