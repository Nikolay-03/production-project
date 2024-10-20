import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Profile, ProfileSchema} from "../types/profile";
import {fetchProfileData} from "../api/fetchProfileData/fetchProfileData";
import {updateProfileData} from "../api/updateProfileData/updateProfileData";

const initialState: ProfileSchema = {
    isLoading:false,
    readonly:true,
    error:undefined,
    data:undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setReadonly:(state, action: PayloadAction<boolean>) => {
            state.readonly = action.payload
        },
        cancelEdit:(state) => {
            state.form = state.data
            state.readonly = true
        },
        updateData:(state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...action.payload
            }
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.form = action.payload
            })
            builder.addCase(fetchProfileData.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
            builder.addCase(updateProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
                state.readonly = true
                state.form = action.payload
            })
            builder.addCase(updateProfileData.rejected, (state, action) => {
                state.error = action.payload
                state.isLoading = false
            })
        }
})
export const {reducer: profileReducer} = profileSlice
export const { actions: profileActions } = profileSlice

