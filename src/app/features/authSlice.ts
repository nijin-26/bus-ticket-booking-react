import { createSlice } from '@reduxjs/toolkit';

interface IUser {
    firstName: string;
    email: string;
}

interface IAuthState {
    isAuthModalDisplayed: boolean;
    user: IUser | null;
}

const initialState: IAuthState = {
    isAuthModalDisplayed: false,
    user: {
        firstName: 'abhib',
        email: 'abhib@gmail.com',
    },
};

// const initialState: IAuthState = {
//     isAuthModalDisplayed: false,
//     user: null,
// };

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        showAuthModal: (state) => {
            state.isAuthModalDisplayed = true;
        },
        hideAuthModal: (state) => {
            state.isAuthModalDisplayed = false;
        },
    },
});

export const { showAuthModal, hideAuthModal } = authSlice.actions;

export default authSlice.reducer;
