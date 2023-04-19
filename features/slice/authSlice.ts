import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'features/store';


const initialState: userCredentials = {
    _id: null,
    fullName: null,
    photo: null,
    logged: null
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        setCredentials: ( state, action: PayloadAction<userCredentials>) => {
            state._id = action.payload._id
            state.fullName = action.payload.fullName
            state.photo = action.payload.photo
            state.logged = action.payload.logged
        },
        deleteCredentials: (state) => {
            state._id = null
            state.fullName = null
            state.photo = null
            state.logged = null
        }
    }
})

export const { setCredentials, deleteCredentials } = authSlice.actions

//state 
export const userInfo = (state: RootState) => state.stateUser

export default authSlice.reducer
