import { configureStore } from '@reduxjs/toolkit';

// Reducers
import themeReducer from './features/themeSlice';
import languageReducer from './features/languageSlice';
import busSearchSlice from './features/busSearchSlice';

import authReducer from './features/authSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        language: languageReducer,
        busSearch: busSearchSlice,
        auth: authReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
