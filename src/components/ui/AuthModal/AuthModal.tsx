import { Box, Modal, Tab, Tabs } from '@mui/material';
import { AuthModalWrapper } from './AuthModal.styled';
import { useState } from 'react';
import SignIn from './SignIn/SignIn';
import SingUp from './SignUp/SignUp';

type TAuthModalProps = {
    isOpen: boolean;
    closeModal: () => void;
};

export const AuthModal = ({ isOpen, closeModal }: TAuthModalProps) => {
    const [selectedTab, setSelectedTab] = useState(0);

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
                    <Tab label="Sign In" />
                    <Tab label="Sign Up" />
                </Tabs>
                <Box py={2}>{selectedTab === 0 ? <SignIn /> : <SingUp />}</Box>
            </AuthModalWrapper>
        </Modal>
    );
};
