import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/projects";

// ================= GET ALL PROJECTS =================
export const getProjects = createAsyncThunk(
  "projects/getAll",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();

      console.log("AUTH STATE 👉", state.auth);

      const token = state.auth.user?.token;
      console.log("TOKEN 👉", token);

      if (!token) {
        throw new Error("No token found");
      }

      const res = await axios.get(API_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

      if (!token) {
        throw new Error("No token found");
      }

      const res = await axios.post(API_URL, projectData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return res.data.project;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const getProjectById = createAsyncThunk(
  "projects/getById",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user?.token;
      console.log("🔍 FETCHING PROJECT ID:", id, "TOKEN:", token ? "YES" : "NO");

      const res = await axios.get(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      console.log("📡 API RESPONSE:", res.data); // DEBUG
      return res.data;
    } catch (error) {
      console.log("💥 API ERROR:", error.response?.data || error.message);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Failed to fetch project"
      );
    }
  }
);


 export const requestToJoinProject = createAsyncThunk(
  "projects/requestJoin",
  async ({ projectId, role }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      const res = await axios.post(
        `http://localhost:5000/api/projects/${projectId}/request`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
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