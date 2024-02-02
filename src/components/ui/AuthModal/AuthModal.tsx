import { Box, Modal, Tabs } from '@mui/material';
import { AuthModalWrapper, StyledTab } from './AuthModal.styled';
import { useState } from 'react';
import SignIn from './SignIn/SignIn';
import SingUp from './SignUp/SignUp';
import { useTranslation } from 'react-i18next';

type TAuthModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

export const AuthModal = ({ isOpen, closeModal }: TAuthModalProps) => {
    const [selectedTab, setSelectedTab] = useState(0);
    const { t } = useTranslation('auth');

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
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
                <Box py={4} px={2}>
                    {selectedTab === 0 ? <SignIn /> : <SingUp />}
                </Box>
            </AuthModalWrapper>
        </Modal>
    );
};
