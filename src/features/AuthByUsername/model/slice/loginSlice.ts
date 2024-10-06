import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {LoginSchema} from "../types/LoginSchema";
import {loginByUsername} from "../api/loginByUsername/loginByUsername";

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state: LoginSchema, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setPassword: (state: LoginSchema, action: PayloadAction<string>) => {
            state.password = action.payload
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(loginByUsername.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            builder.addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false
            })
            builder.addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
        }
})
export const {reducer: loginReducer} = loginSlice
export const {actions: loginActions} = loginSlice

