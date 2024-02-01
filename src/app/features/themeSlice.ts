import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
    currentTheme: 'light' | 'dark';
}

const localStorageTheme = localStorage.getItem('theme');
const initialState: ThemeState = {
    currentTheme: localStorageTheme
        ? (localStorageTheme as 'light' | 'dark')
        : 'light',
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.currentTheme =
                state.currentTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', state.currentTheme);
        },
        setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
            state.currentTheme = action.payload;
            localStorage.setItem('theme', action.payload);
        },
    },
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
