import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './slices/bookSlice'

const store = configureStore({
    reducer: bookReducer,
});

export default store;