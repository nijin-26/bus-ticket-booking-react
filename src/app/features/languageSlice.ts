import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILanguage } from '../../config';
import i18n from '../../i18n/i18n';

interface ILanguageState {
    currentLanguage: ILanguage;
}

const initialState: ILanguageState = {
    currentLanguage: i18n.language as ILanguage.English,
};

const languageSlice = createSlice({
    name: 'i18n',
    initialState,
    reducers: {
        toggleLanguage: (state, action: PayloadAction<ILanguage>) => {
            state.currentLanguage = action.payload;
            i18n.changeLanguage(action.payload)
                .then(() => {})
                .catch((error) => {
                    console.error('Something went wrong loading', error);
                });
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;

export default languageSlice.reducer;
