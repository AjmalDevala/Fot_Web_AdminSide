import { createSlice } from "@reduxjs/toolkit";
export const authSlice = createSlice({
    name:"auth",
    initialState:{
        authenticated:false,
    },
    reducers:{
        authenticate : (state)=>{
            state.authenticated = true;
        },
        unAuthenticate: (state)=>{
            state.authenticated = false;
        }
    }
})

export const {authenticate, unAuthenticate} = authSlice.actions;
export default authSlice.reducer;