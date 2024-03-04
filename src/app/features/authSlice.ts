import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUserDataFromStorage, storage } from '../../utils';
import { IAuthData, IAuthUser, ISignInState } from '../../types';

interface IAuthState {
    isAuthModalDisplayed: boolean;
    user: IAuthUser | null;
    signInState: ISignInState | null;
}

const initialState: IAuthState = {
    isAuthModalDisplayed: false,
    user: getUserDataFromStorage(),
    signInState: null,
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
        setCredentials: (state, action: PayloadAction<IAuthData>) => {
            const { accessToken, refreshToken, ...rest } = action.payload;
            storage.setItem('accessToken', accessToken);
            storage.setItem('refreshToken', refreshToken);
            storage.setItem('userData', rest);
            state.user = rest;
        },
        setSignInState: (state, action: PayloadAction<ISignInState>) => {
            state.signInState = { ...state.signInState, ...action.payload };
        },
        clearSignInState: (state) => {
            state.signInState = null;
        },
        logout: (state) => {
            storage.removeItem('accessToken');
            storage.removeItem('userData');
            state.user = null;
        },
    },
});

export const {
    showAuthModal,
    hideAuthModal,
    setCredentials,
    setSignInState,
    clearSignInState,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
