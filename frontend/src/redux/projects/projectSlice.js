import { createSlice } from "@reduxjs/toolkit";
import { createProject, getProjectById, getProjects } from "./projectAction";
import { logout } from "../auth/authSlice"; // Import logout from auth

const initialState = {
  projects: [],
  project: null,
  singleProject: null,
  isLoading: false,
  error: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    clearProjects: (state) => {
      state.projects = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // CREATE PROJECT
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

      // GET PROJECTS
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
      })
      // Clear on logout
      .addCase(logout, (state) => {
        state.projects = [];
        state.error = null;
      })

      //       project details by id

      .addCase(getProjectById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.singleProject = action.payload.project;
        console.log("✅ PROJECT LOADED:", action.payload.project?.title);
      })
      .addCase(getProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        console.log("❌ PROJECT ERROR:", action.payload);
      });
  },
});

export const { clearProjects } = projectSlice.actions;
export default projectSlice.reducer;
