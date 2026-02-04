import { createSlice } from "@reduxjs/toolkit";
import { createProject, getProjects } from "./projectAction";

const initialState = {
  projects: [],
  isLoading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // ===== CREATE PROJECT =====
      .addCase(createProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects.push(action.payload);
      })

      .addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // ===== GET PROJECTS =====
      .addCase(getProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projects = action.payload;
      })

      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default projectSlice.reducer;
