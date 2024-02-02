import { AppBar, Button, Menu, MenuItem, Typography } from '@mui/material';
import { StyledToolBar } from './Footer.styled';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { useState } from 'react';

const languages: string[] = ['English - en', 'Espanol - es'];

export const Footer = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('English - en');
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleLanguageSelection = (setting: string) => {
        if (languages.includes(setting)) {
            setSelectedLanguage(setting);
        }
    };
    const handleCloseLanguageMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar position="static" color="primary">
                <StyledToolBar>
                    <Typography variant="caption" color="inherit">
                        © 2024 All rights reserved
                    </Typography>

                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={
                            <LanguageRoundedIcon
                                fontSize="small"
                                sx={{ marginRight: 1 }}
                            />
                        }
                        onClick={handleOpenLanguageMenu}
                    >
                        <span style={{ fontSize: '12px' }}>
                            {selectedLanguage}
                        </span>
                    </Button>
                    <Menu
                        id="language-appbar"
                        sx={{ marginTop: '-35px' }}
                        anchorEl={anchorElUser}
                        keepMounted
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseLanguageMenu}
                        MenuListProps={{
                            sx: {
                                width: anchorElUser && anchorElUser.offsetWidth,
                            },
                        }}
                    >
                        {languages.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={() => {
                                    handleCloseLanguageMenu();
                                    handleLanguageSelection(setting);
                                }}
                            >
                                <Typography variant="body2" textAlign="center">
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
