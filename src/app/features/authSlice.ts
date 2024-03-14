import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { storage } from '../../utils';
import { IAuthUser, ISignInState } from '../../types';

interface IAuthState {
    isAuthModalDisplayed: boolean;
    user: IAuthUser | null;
    signInState: ISignInState | null;
    refreshIntervalId: number | null;
}

const initialState: IAuthState = {
    isAuthModalDisplayed: false,
    user: null,
    signInState: null,
    refreshIntervalId: null,
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
        setUser: (state, action: PayloadAction<IAuthUser>) => {
            state.user = action.payload;
        },
        setSignInState: (state, action: PayloadAction<ISignInState>) => {
            state.signInState = { ...state.signInState, ...action.payload };
        },
        clearSignInState: (state) => {
            state.signInState = null;
        },
        setIntervalId: (state, action: PayloadAction<{ id: number }>) => {
            state.refreshIntervalId = action.payload.id;
        },
        logout: (state) => {
            storage.removeItem('accessToken');
            storage.removeItem('refreshToken');
            storage.removeItem('userData');
            state.user = null;
            state.refreshIntervalId = null;
        },
    },
});

export const {
    showAuthModal,
    hideAuthModal,
    setUser,
    setSignInState,
    clearSignInState,
    setIntervalId,
    logout,
} = authSlice.actions;

export default authSlice.reducer;
