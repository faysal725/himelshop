import { configureStore } from '@reduxjs/toolkit';
import authReducer from './Auth/authSlice';
import categoryReducer from './Category/categorySlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer
    },
});

export default store;