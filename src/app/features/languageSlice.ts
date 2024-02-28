import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n/i18n';
import { LanguageCode } from '../../types/index';

interface ILanguageState {
    currentLanguage: LanguageCode;
}

const localStorageLanguage = localStorage.getItem('language');
const initialState: ILanguageState = {
    currentLanguage: localStorageLanguage
        ? (localStorageLanguage as LanguageCode)
        : (i18n.language as LanguageCode.English),
};
const languageSlice = createSlice({
    name: 'i18n',
    initialState,
    reducers: {
        toggleLanguage: (state, action: PayloadAction<LanguageCode>) => {
            state.currentLanguage = action.payload;
            i18n.changeLanguage(action.payload).catch((error) => {
                console.error('Something went wrong loading', error);
            });

            localStorage.setItem('language', state.currentLanguage);
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
