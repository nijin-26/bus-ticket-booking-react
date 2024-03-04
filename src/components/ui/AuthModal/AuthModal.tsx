import { useState } from 'react';
import {
    Box,
    Collapse,
    Dialog,
    Tab,
    Tabs,
    Typography,
    useMediaQuery,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import { useTheme } from '@emotion/react';

interface IAuthModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

enum ESelectedAuthTab {
    SIGN_IN,
    SIGN_UP,
}

export const AuthModal = ({ isOpen, closeModal }: IAuthModalProps) => {
    const { breakpointValues } = useTheme();
    const { t } = useTranslation('auth');
    const isXsScreen = useMediaQuery(
        `(max-width:${breakpointValues.extraSmall})`
    );

    const [selectedTab, setSelectedTab] = useState<ESelectedAuthTab>(
        ESelectedAuthTab.SIGN_IN
    );

    const handleTabChange = (
        _: React.SyntheticEvent,
        newValue: ESelectedAuthTab
    ) => {
        setSelectedTab(newValue);
    };

    //used to display sign-in form after signing up
    const setSignInAsSelectedTab = () => {
        setSelectedTab(ESelectedAuthTab.SIGN_IN);
    };

    return (
        <Dialog open={isOpen} onClose={closeModal} fullScreen={isXsScreen}>
            <Box>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                >
                    <Tab
                        label={
                            <Typography variant="h6">{t('signIn')}</Typography>
                        }
                    />
                    <Tab
                        label={
                            <Typography variant="h6">{t('signUp')}</Typography>
                        }
                    />
                </Tabs>
                <Box px={2}>
                    <Collapse
                        in={selectedTab === ESelectedAuthTab.SIGN_IN}
                        timeout={300}
                    >
                        <Box py={4}>
                            <SignIn closeModal={closeModal} key={selectedTab} />
                        </Box>
                    </Collapse>
                    <Collapse
                        in={selectedTab === ESelectedAuthTab.SIGN_UP}
                        timeout={300}
                    >
                        <Box py={4}>
                            <SignUp
                                closeModal={closeModal}
                                setSignInAsSelectedTab={setSignInAsSelectedTab}
                                key={selectedTab}
                            />
                        </Box>
                    </Collapse>
                </Box>
            </Box>
        </Dialog>
    );
};
