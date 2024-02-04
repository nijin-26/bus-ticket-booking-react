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
import { AuthModal } from '../../components';

const settings = ['My bookings', 'Logout'];

export const Header = () => {
    const { t } = useTranslation('headerFooter'); // mention "ns2" to include values from ns2.json
    const themeMode = useAppSelector((state) => state.theme.currentTheme);
    const dispatch = useAppDispatch();

    const [isLoginClicked, setLoginClick] = useState(false);
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleLoginClick = () => {
        setLoginClick(true);
        setIsLoginModalOpen(true);
    };

    const handleThemeClick = () => {
        dispatch(toggleTheme());
    };

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = (setting: string) => {
        setAnchorElUser(null);
        if (setting === 'Logout') {
            setLoginClick(false);
            setIsLoginModalOpen(false);
        }
    };

    return (
        <>
            <AppBar position="sticky">
                <StyledToolBar>
                    <Link
                        href="#"
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
                        {!isLoginClicked ? (
                            <Button
                                onClick={handleLoginClick}
                                variant="contained"
                                color="secondary"
                                size="small"
                            >
                                {t('Login')}
                            </Button>
                        ) : (
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
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
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
                        )}
                    </Box>
                </StyledToolBar>
            </AppBar>
            <AuthModal
                isOpen={isLoginModalOpen}
                closeModal={() => setIsLoginModalOpen(false)}
            />
        </>
    );
};
