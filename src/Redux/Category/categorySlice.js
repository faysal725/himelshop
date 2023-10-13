/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import categoryService from './CategoryService';

const initialState = {
    categories: null
}

// get all categories
export const allCategories = createAsyncThunk('categories/allCategories', async (data, thunkAPI) => {
    try {
        return categoryService.getAllCategory();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(allCategories.pending, (state) => {
                state.categories = null
            })
            .addCase(allCategories.fulfilled, (state, action) => {
                state.categories = action.payload
            })
            .addCase(allCategories.rejected, (state) => {
                state.categories = null
            })
    }
})

export default categorySlice.reducer;