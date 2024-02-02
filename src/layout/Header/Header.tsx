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

const settings = ['My bookings', 'Logout'];

export const Header = () => {
    const [themeBool, setThemeBool] = useState(true);
    const [isLoginClicked, setLoginClick] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleLoginClick = () => {
        setLoginClick(true);
    };
    const handleThemeClick = () => {
        setThemeBool(!themeBool);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = (setting: string) => {
        setAnchorElUser(null);
        if (setting === 'Logout') {
            setLoginClick(false);
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
                                sx={{
                                    marginRight: 1,
                                    marginTop: 0.25,
                                    fontSize: '36px',
                                }}
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
                            sx={{ mr: 2 }}
                        >
                            {themeBool ? (
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
                                Login
                            </Button>
                        ) : (
                            <>
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
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
        </>
    );
};
