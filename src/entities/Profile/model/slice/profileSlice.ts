import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Profile, ProfileSchema} from "../types/profile";
import {fetchProfileData} from "../api/fetchProfileData/fetchProfileData";

const initialState: ProfileSchema = {
    isLoading:false,
    readonly:true,
    error:undefined,
    data:undefined,
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers:
        (builder) => {
            builder.addCase(fetchProfileData.pending, (state) => {
                state.isLoading = true
                state.error = undefined
            })
            builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false
                state.data = action.payload
            })
            builder.addCase(fetchProfileData.rejected, (state, action: PayloadAction<string>) => {
                state.error = action.payload
                state.isLoading = false
            })
        }
})
export const {reducer: profileReducer} = profileSlice
export const { actions: profileActions } = profileSlice

