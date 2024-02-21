import { useTranslation } from 'react-i18next';
import { useState } from 'react';
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
} from '@mui/material';
// import { NavLink } from 'react-router-dom';
import { StyledButton } from '../Footer/Footer.styled';
import { ConfirmDialog } from '../../components';
import { StyledToolBar } from './Header.styled';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
// import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

export const Header = () => {
    const { t } = useTranslation(['headerFooter', 'logoutModal']);
    const themeMode = useAppSelector((state) => state.theme.currentTheme);
    const user = useAppSelector((state) => state.auth.user);
    const [isLogoutModalDisplayed, setIsLogoutModalDisplayed] =
        useState<boolean>(false);
    const dispatch = useAppDispatch();

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

    const handleLogoutClick = () => {
        dispatch(logout());
        handleCloseUserMenu();
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
                                <StyledButton
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
                                    <Typography variant="body2">
                                        {user.fullName}
                                    </Typography>
                                </StyledButton>
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
                                    {/*To be included after myBookings page has been added*/}
                                    {/* <MenuItem component={NavLink} to="/users">
                                        <ListItemIcon>
                                            <PermContactCalendarIcon fontSize="small" />
                                        </ListItemIcon>
                                        <Typography
                                            variant="body2"
                                            textAlign="center"
                                        >
                                            {t('myBookings')}
                                        </Typography>
                                    </MenuItem> */}
                                    <MenuItem
                                        onClick={() => {
                                            setIsLogoutModalDisplayed(true);
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
                            >
                                {t('login')}
                            </Button>
                        )}
                    </Box>
                </StyledToolBar>
            </AppBar>
            <ConfirmDialog
                title={t('logoutModal:title')}
                open={isLogoutModalDisplayed}
                handleClose={() => {
                    setIsLogoutModalDisplayed(false);
                }}
                agreeText={t('logoutModal:confirmText')}
                disagreeText={t('logoutModal:cancelText')}
                handleAgreeFunction={handleLogoutClick}
            >
                {t('logoutModal:message')}
            </ConfirmDialog>
        </>
    );
};
