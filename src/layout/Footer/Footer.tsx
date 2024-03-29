import { AppBar, Menu, MenuItem, Typography } from '@mui/material';
import { StyledButton, StyledToolBar } from './Footer.styled';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import { useMemo, useState } from 'react';
import { LANGUAGES } from '../../config';
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { toggleLanguage } from '../../app/features/languageSlice';
import { LanguageCode } from '../../types';
import { toast } from 'react-toastify';

export const Footer = () => {
    const { t } = useTranslation('headerFooter');
    const languageMode = useAppSelector(
        (state) => state.language.currentLanguage
    );
    const dispatch = useAppDispatch();

    const currentLanguageObject = useMemo(() => {
        return LANGUAGES.find((e) => e.code == languageMode);
    }, [languageMode]);

    const currentLanguageBtnText =
        currentLanguageObject?.label + '-' + currentLanguageObject?.code || '-';

    const [selectedLanguage, setSelectedLanguage] = useState(
        currentLanguageBtnText
    );
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenLanguageMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleLanguageSelection = (languageCode: LanguageCode) => {
        const languageObjSelected = LANGUAGES.find(
            (e) => e.code == languageCode
        );

        if (languageObjSelected?.code) {
            setSelectedLanguage(
                languageObjSelected.label + '-' + languageObjSelected.code
            );
            try {
                dispatch(toggleLanguage(languageCode));
            } catch (error) {
                toast.error(t('languageError'));
            }
        }
    };

    const handleCloseLanguageMenu = () => {
        setAnchorElUser(null);
    };
    return (
        <>
            <AppBar component={'footer'} position="static" color="primary">
                <StyledToolBar>
                    <Typography variant="caption" color="inherit">
                        {t('copyRight')}
                    </Typography>

                    <StyledButton
                        variant="outlined"
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
                    </StyledButton>
                    <Menu
                        id="language-appbar"
                        sx={{
                            marginTop: '-35px',
                        }}
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
