import { useTranslation } from 'react-i18next';
// import { LANGUAGES } from '../../config/constants';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { StyledToolBar } from './Header.styled';
import IconButton from '@mui/material/IconButton';
import {
    Avatar,
    Button,
    Link,
    Menu,
    MenuItem,
    Typography,
} from '@mui/material';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import DirectionsBusRoundedIcon from '@mui/icons-material/DirectionsBusRounded';
import testProfile from '../../assets/person1.jpeg';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleTheme } from '../../app/features/themeSlice';
import { showAuthModal } from '../../app/features/authSlice';

export const Header = () => {
    const { t } = useTranslation('headerFooter');
    const themeMode = useAppSelector((state) => state.theme.currentTheme);
    const user = useAppSelector((state) => state.auth.user);
    const dispatch = useAppDispatch();

    const [menuAnchorElement, setMenuAnchorElement] =
        useState<null | HTMLElement>(null);

    const settings = [t('myBooking'), t('Logout')];

    const handleThemeClick = () => {
        dispatch(toggleTheme());
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setMenuAnchorElement(event.currentTarget);
    };

    const handleCloseUserMenu = (setting: string) => {
        setMenuAnchorElement(null);
        if (setting === t('Logout')) {
            setLoginClick(false);
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
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    className="profile-avatar"
                                >
                                    <Avatar
                                        alt="profile-Picture"
                                        src={testProfile}
                                    />
                                </IconButton>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={menuAnchorElement}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(menuAnchorElement)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem
                                            key={setting}
                                            onClick={() => {
                                                handleCloseUserMenu(setting);
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                textAlign="center"
                                            >
                                                {setting}
                                            </Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </>
                        ) : (
                            <Button
                                onClick={() => dispatch(showAuthModal())}
                                variant="contained"
                                color="secondary"
                                size="small"
                            >
                                {t('Login')}
                            </Button>
                        )}
                    </Box>
                </StyledToolBar>
            </AppBar>
        </>
    );
};
