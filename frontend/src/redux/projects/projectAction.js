


import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api/projects";

// ================= GET ALL PROJECTS =================
export const getProjects = createAsyncThunk(
  "projects/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;

      if (!token) throw new Error("No token found");

      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data.projects;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ================= CREATE PROJECT =================
export const createProject = createAsyncThunk(
  "projects/create",
  async (projectData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;

      if (!token) throw new Error("No token found");

      const res = await axios.post(API_URL, projectData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      return res.data.project;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

// ================= GET PROJECT BY ID =================
export const getProjectById = createAsyncThunk(
  "projects/getById",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;

      const res = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      // FIX: sirf res.data.project return karo — poora object nahi
      // Pehle res.data return hota tha → slice mein action.payload.project
      // → frontend mein phir .project → double nested ho jaata tha
      return res.data.project;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch project"
      );
    }
  }
);

// ================= REQUEST TO JOIN PROJECT =================
export const requestToJoinProject = createAsyncThunk(
  "projects/requestJoin",
  async ({ projectId, role }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;

      const res = await axios.post(
        `${API_URL}/${projectId}/request`,
        { role },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Request failed"
      );
    }
  }
);