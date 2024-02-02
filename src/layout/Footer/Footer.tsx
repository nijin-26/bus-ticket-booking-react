import { AppBar, Button, Menu, MenuItem, Typography } from '@mui/material';
import { StyledToolBar } from './Footer.styled';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { useMemo, useState } from 'react';
import { LANGUAGES } from '../../config';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
    const { i18n, t } = useTranslation('headerFooter');

    const currentLanguageObject = useMemo(() => {
        return LANGUAGES.find((e) => e.code === i18n.language);
    }, [i18n.language]);

    const currentLanguageBtnText =
        currentLanguageObject?.label + '-' + currentLanguageObject?.code;

    const [selectedLanguage, setSelectedLanguage] = useState(
        currentLanguageBtnText
    );
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleLanguageSelection = (setting: string) => {
        const languageObjSelected = LANGUAGES.find((e) => e.code == setting);

        if (languageObjSelected?.code) {
            setSelectedLanguage(
                languageObjSelected.label + '-' + languageObjSelected.code
            );
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
                        {t('copyRight')}
                    </Typography>

                    <Button
                        variant="outlined"
                        color="secondary"
                        startIcon={
                            <LanguageRoundedIcon
                                fontSize="small"
                                className="language-icon"
                            />
                        }
                        onClick={handleOpenLanguageMenu}
                    >
                        <span className="language-span">
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
                        {LANGUAGES.map((setting) => (
                            <MenuItem
                                key={setting.code}
                                onClick={() => {
                                    handleCloseLanguageMenu();
                                    handleLanguageSelection(setting.code);
                                }}
                            >
                                <Typography variant="body2" textAlign="center">
                                    {` ${setting.label}-${setting.code}`}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </StyledToolBar>
            </AppBar>
        </>
    );
};
