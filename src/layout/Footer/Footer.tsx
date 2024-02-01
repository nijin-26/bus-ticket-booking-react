import { AppBar, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import { StyledToolBar } from './Footer.styled';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { useState } from 'react';

const languages: string[] = ['English/en', 'Espanol/es'];

export const Footer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English/en');
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseLanguageMenu = (setting: string) => {
        setAnchorElUser(null);
        if (languages.includes(setting)) {
            setSelectedLanguage(setting);
        }
    };
    return (
        <>
            <AppBar position="static" color="primary">
                <StyledToolBar>
                    <Typography variant="body1" color="inherit">
                        © 2024 All rights reserved
                    </Typography>

                    <IconButton
                        onClick={handleOpenLanguageMenu}
                        size="small"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <LanguageRoundedIcon
                            fontSize="small"
                            sx={{ marginRight: 1 }}
                        />
                        <span style={{ fontSize: '12px' }}>
                            {selectedLanguage}
                        </span>
                    </IconButton>
                    <Menu
                        id="language-appbar"
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
                        onClose={handleCloseLanguageMenu}
                    >
                        {languages.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={() => {
                                    handleCloseLanguageMenu(setting);
                                }}
                            >
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </StyledToolBar>
            </AppBar>
        </>
    );
};
