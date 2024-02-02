import { createSlice } from '@reduxjs/toolkit';

interface IThemeState {
    currentTheme: 'light' | 'dark';
}

const localStorageTheme = localStorage.getItem('theme');
const initialState: IThemeState = {
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
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
