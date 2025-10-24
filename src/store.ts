// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './features/theme/themeSlice';
import projectDetailReducer from './features/projectDetail/projectdetailsSlice';

export const store = configureStore({
    reducer: { 
        theme: themeReducer,
        projectDetail: projectDetailReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;