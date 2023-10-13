/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
    registerReq: null,
    verifyOtpInfo: null,
    user: null,
    forgetPass: null,
    resetPass: null,
    isLoading: false,
}

// register user 
export const registerWithPhone = createAsyncThunk('auth/registerWithPhone', async (data, thunkAPI) => {
    try {
        return authService.registerWithPhone(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

// verify OTP
export const verifyOtp = createAsyncThunk('auth/verifyOtp', async (data, thunkAPI) => {
    try {
        return authService.verfiyOtp(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

// user login
export const userLogin = createAsyncThunk('auth/userLogin', async (data, thunkAPI) => {
    try {
        return authService.userLogin(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

// get user
export const getUser = createAsyncThunk('auth/getUser', async (data, thunkAPI) => {
    try {
        return authService.getUser()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

// logout
export const logout = createAsyncThunk('auth/logout', async (data, thunkAPI) => {
    try {
        return authService.logout()
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

// reset with phone
export const forgetPassword = createAsyncThunk('auth/forgetPassword', async (phone, thunkAPI) => {
    try {
        return authService.forgetPassword(phone)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

// reset password
export const resetPassword = createAsyncThunk('auth/resetPassword', async (data, thunkAPI) => {
    try {
        return authService.resetPassword(data)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message)
    }
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.registerReq = null
            state.verifyOtpInfo = null
            state.user = null
            state.forgetPass = null
            state.resetPass = null
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerWithPhone.pending, (state) => {
                state.isLoading = true
            })
            .addCase(registerWithPhone.fulfilled, (state, action) => {
                state.isLoading = false
                state.registerReq = action.payload
            })
            .addCase(registerWithPhone.rejected, (state, action) => {
                state.isLoading = false
                state.registerReq = action.payload
            })
            .addCase(verifyOtp.pending, (state) => {
                state.isLoading = true
            })
            .addCase(verifyOtp.fulfilled, (state, action) => {
                state.isLoading = false
                state.verifyOtpInfo = action.payload
            })
            .addCase(verifyOtp.rejected, (state, action) => {
                state.isLoading = false
                state.registerReq = null
                state.verifyOtpInfo = action.payload
            })
            .addCase(userLogin.pending, (state) => {
                state.isLoading = true
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.isLoading = false
                state.user = action.payload
            })
            .addCase(getUser.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {
                state.isLoading = false
                state.user = action.payload
            })
            .addCase(logout.pending, (state) => {
                state.isLoading = true
            })
            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false
                state.user = null
            })
            .addCase(logout.rejected, (state, action) => {
                state.isLoading = false
                state.user = action.payload
            })
            .addCase(forgetPassword.pending, (state) => {
                state.isLoading = true
            })
            .addCase(forgetPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.forgetPass = action.payload
            })
            .addCase(forgetPassword.rejected, (state, action) => {
                state.isLoading = false
                state.forgetPass = action.payload
            })
            .addCase(resetPassword.pending, (state) => {
                state.isLoading = true
                state.forgetPass = null
            })
            .addCase(resetPassword.fulfilled, (state, action) => {
                state.isLoading = false
                state.resetPass = action.payload
            })
            .addCase(resetPassword.rejected, (state, action) => {
                state.isLoading = false
                state.resetPass = action.payload
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer;