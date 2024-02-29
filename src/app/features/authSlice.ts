import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getUserDataFromStorage, storage } from '../../utils';
import { IAuthData, IAuthUser } from '../../types';

interface IAuthState {
    isAuthModalDisplayed: boolean;
    user: IAuthUser | null;
    redirectState: IRedirectState | null;
}

interface IRedirectState {
    from: string;
    message: string;
}

const initialState: IAuthState = {
    isAuthModalDisplayed: false,
    user: getUserDataFromStorage(),
    redirectState: null,
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
            const { accessToken, ...rest } = action.payload;
            storage.setItem('accessToken', accessToken);
            storage.setItem('userData', rest);
            state.user = rest;
        },
        setRedirectState: (state, action: PayloadAction<IRedirectState>) => {
            state.redirectState = action.payload;
        },
        clearRedirectState: (state) => {
            state.redirectState = null;
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
    setRedirectState,
    clearRedirectState,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
