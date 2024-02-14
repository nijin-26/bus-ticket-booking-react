import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleTheme } from '../../app/features/themeSlice';
import { logout, showAuthModal } from '../../app/features/authSlice';
import {
    Box,
    AppBar,
    Avatar,
    Button,
    Link,
    Menu,
    MenuItem,
    Typography,
    IconButton,
} from '@mui/material';
import { StyledToolBar } from './Header.styled';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import testProfile from '../../assets/person1.jpeg';
import { NavLink } from 'react-router-dom';

export const Header = () => {
    const { t } = useTranslation('headerFooter');
    const themeMode = useAppSelector((state) => state.theme.currentTheme);
    const user = useAppSelector((state) => state.auth.user);
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
                                <IconButton
                                    id="profile-button"
                                    aria-controls={
                                        isMenuOpen ? 'profile-menu' : undefined
                                    }
                                    aria-haspopup="true"
                                    aria-expanded={
                                        isMenuOpen ? 'true' : undefined
                                    }
                                    onClick={handleOpenUserMenu}
                                    className="profile-avatar"
                                >
                                    <Avatar
                                        alt="profile-Picture"
                                        src={testProfile}
                                    />
                                </IconButton>
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
                                    <MenuItem component={NavLink} to="/users">
                                        <Typography
                                            variant="body2"
                                            textAlign="center"
                                        >
                                            {t('myBookings')}
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={handleLogoutClick}>
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
        </>
    );
};
