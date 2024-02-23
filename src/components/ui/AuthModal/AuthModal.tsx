import { useState } from 'react';
import { Box, Collapse, Modal, Tabs } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { AuthModalWrapper, StyledTab } from './AuthModal.styled';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';

type TAuthModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

enum ESelectedAuthTab {
    SIGN_IN,
    SIGN_UP,
}

export const AuthModal = ({ isOpen, closeModal }: TAuthModalProps) => {
    const [selectedTab, setSelectedTab] = useState<ESelectedAuthTab>(
        ESelectedAuthTab.SIGN_IN
    );
    const { t } = useTranslation('auth');

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
        <Modal open={isOpen} onClose={closeModal} component={'div'}>
            <AuthModalWrapper>
                <Tabs
                    value={selectedTab}
                    onChange={handleTabChange}
                    variant="fullWidth"
                >
                    <StyledTab label={t('signIn')} />
                    <StyledTab label={t('signUp')} />
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
            </AuthModalWrapper>
        </Modal>
    );
};
