import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/projects";

// ================= CREATE PROJECT =================
export const createProject = createAsyncThunk(
  "projects/create",
  async (projectData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      const res = await axios.post(API_URL, projectData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // backend: { project: {...} }
      return res.data.project;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Create project failed"
      );
    }
  }
);

// ================= GET ALL PROJECTS =================
export const getProjects = createAsyncThunk(
  "projects/getAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL);

      
      return res.data.projects || res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Fetch projects failed"
      );
    }
  }
);
