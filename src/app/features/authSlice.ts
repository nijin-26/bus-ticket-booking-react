import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ISignInResponse } from '../../api/types/signIn';
import storage from '../../utils/storageUtils';

interface IUser {
    firstName: string;
    email: string;
    role: null;
}

interface IAuthState {
    isAuthModalDisplayed: boolean;
    user: IUser | null;
}

// const initialState: IAuthState = {
//     isAuthModalDisplayed: false,
//     user: {
//         firstName: 'abhib',
//         email: 'abhib@gmail.com',
//         role: null,
//     },
// };

const initialState: IAuthState = {
    isAuthModalDisplayed: false,
    user: null,
};

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
        setCredentials: (state, action: PayloadAction<ISignInResponse>) => {
            const { accessToken, ...rest } = action.payload;
            storage.setItem('accessToken', accessToken);
            state.user = rest;
        },
        logout: (state) => {
            storage.removeItem('accessToken');
            state.user = null;
        },
    },
});

export const { showAuthModal, hideAuthModal, setCredentials, logout } =
    authSlice.actions;

export default authSlice.reducer;
