





import { createSlice } from "@reduxjs/toolkit";
import { createProject, getProjectById, getProjects, requestToJoinProject } from "./projectAction";
import { logout } from "../auth/authSlice";

const initialState = {
  projects: [],
  // FIX: project aur singleProject dono the — confusing tha
  // Ab sirf ek: singleProject — aur ProjectDetails mein bhi sirf yahi use hoga
  singleProject: null,
  isLoading: false,
  error: null,
  requestLoading: false,
  requestSuccess: false,
  requestError: null,
};

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    clearProjects: (state) => {
      state.projects = [];
      state.error = null;
    },
    // FIX: project detail page se wapas jaane par state clear karo
    // warna purana project flash karta hai
    clearSingleProject: (state) => {
      state.singleProject = null;
      state.error = null;
      state.requestSuccess = false;
      state.requestError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // ── CREATE PROJECT ──────────────────────────────
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

      // ── GET ALL PROJECTS ────────────────────────────
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

      // ── GET PROJECT BY ID ───────────────────────────
      .addCase(getProjectById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.singleProject = null;
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        // FIX: action.payload ab seedha project object hai — .project nahi
        // Pehle: return res.data → action.payload = { project: {...} }
        //        state.singleProject = action.payload.project ✓ (sahi tha)
        // Lekin frontend mein: projectWrapper?.project → phir aur nested
        // Ab: return res.data.project → action.payload = {...} directly
        state.singleProject = action.payload;
      })
      .addCase(getProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.singleProject = null;
      })

      // ── REQUEST TO JOIN ─────────────────────────────
      .addCase(requestToJoinProject.pending, (state) => {
        state.requestLoading = true;
        state.requestSuccess = false;
        state.requestError = null;
      })
      .addCase(requestToJoinProject.fulfilled, (state) => {
        state.requestLoading = false;
        state.requestSuccess = true;
      })
      .addCase(requestToJoinProject.rejected, (state, action) => {
        state.requestLoading = false;
        state.requestError = action.payload;
      })

      // ── LOGOUT ──────────────────────────────────────
      .addCase(logout, (state) => {
        state.projects = [];
        state.singleProject = null;
        state.error = null;
      });
  },
});

export const { clearProjects, clearSingleProject } = projectSlice.actions;
export default projectSlice.reducer;