import {createSlice} from "@reduxjs/toolkit";
import {loginUser, registerUser} from "./authAction";

const userfromStorge = JSON.parse(localStorage.getItem("user"));

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: userfromStorge || null,
        isLoading: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("user");
        },
        clearError: (state) => {
            state.error = null;
        },
    },

    extraReducers: (builder) => {
        builder
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })


        //login


        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.isLoading  = false;
            state.user = action.payload;
        })
         .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
    }
});

export const {logout, clearError} = authSlice.actions;
export default authSlice.reducer;