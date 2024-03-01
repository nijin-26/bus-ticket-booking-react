import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import i18n from '../../i18n/i18n';
import { LanguageCode } from '../../types/index';
import { storage } from '../../utils';

interface ILanguageState {
    currentLanguage: LanguageCode;
}

const currentLanguageValue = storage.getItem<LanguageCode>('language');
const initialState: ILanguageState = {
    currentLanguage: currentLanguageValue
        ? currentLanguageValue
        : LanguageCode.English,
};
const languageSlice = createSlice({
    name: 'i18n',
    initialState,
    reducers: {
        toggleLanguage: (state, action: PayloadAction<LanguageCode>) => {
            state.currentLanguage = action.payload;
            storage.setItem('language', state.currentLanguage);
            i18n.changeLanguage(action.payload).catch(() => {
                throw new Error('Error while changing language');
            });
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
