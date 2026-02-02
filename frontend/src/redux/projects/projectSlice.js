import {createSlice} from "@reduxjs/toolkit";
import { createProject } from "./projectAction";

const initialState = {
    projects: [],
    isLoading: false,
    error: null,
};

const projectSlice = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjects: (state, action) => {
            state.projects = action.payload;
        },
    },

    extraReducers: (builder) => {
        builder

        .addCase(createProject.pending, (state) => {
           state.isLoading = true;
           state.error = null;
        })

         .addCase(createProject.fulfilled, (state, action) => {
   state.isLoading = false;
   state.projects.push(action.payload); // better
   state.error = null;
})
      
        .addCase(createProject.rejected, (state, action) => {
            state.isLoading = false;
            state.error=  action.payload;
        })
    },
});

export const {setProjects} = projectSlice.actions;
export default projectSlice.reducer;
