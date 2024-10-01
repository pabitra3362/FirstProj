import { createSlice } from "@reduxjs/toolkit";

const initialState={
    status:false,
    email:""
}

export const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logIn:(state,action)=>{
            state.status=true,
            state.email=action.payload
        },

        logOut:(state)=>{
            state.status=false
            state.email=""
        }

    }
})

export const {logIn,logOut}=authSlice.actions
export default authSlice.reducer