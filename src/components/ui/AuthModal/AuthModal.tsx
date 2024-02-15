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

export const AuthModal = ({ isOpen, closeModal }: TAuthModalProps) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const { t } = useTranslation('auth');

    const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
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
                    <Collapse in={selectedTab === 0} timeout={300}>
                        <Box py={4}>
                            <SignIn closeModal={closeModal} />
                        </Box>
                    </Collapse>
                    <Collapse in={selectedTab === 1} timeout={300}>
                        <Box py={4}>
                            <SignUp closeModal={closeModal} />
                        </Box>
                    </Collapse>
                </Box>
            </AuthModalWrapper>
        </Modal>
    );
};
