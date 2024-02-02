import { createSlice } from '@reduxjs/toolkit';

enum ITheme {
    Light = 'light',
    Dark = 'dark',
}

interface IThemeState {
    currentTheme: ITheme;
}

const localStorageTheme = localStorage.getItem('theme');
const initialState: IThemeState = {
    currentTheme: localStorageTheme
        ? (localStorageTheme as ITheme)
        : ITheme.Light,
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.currentTheme =
                state.currentTheme === ITheme.Light
                    ? ITheme.Dark
                    : ITheme.Light;
            localStorage.setItem('theme', state.currentTheme);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
