import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n/i18n';
import { LanguageCode } from '../../interfaces/index';

interface ILanguageState {
    currentLanguage: LanguageCode;
}

const initialState: ILanguageState = {
    currentLanguage: i18n.language as LanguageCode.English,
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
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
