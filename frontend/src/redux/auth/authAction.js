import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/register`, userData);
      console.log("REGISTER SUCCESS 👉", res.data);
      const user = {
        id: res.data.user.id,
        name: res.data.user.name,
        email: res.data.user.email,
        token: res.data.token,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (error) {
      console.log("REGISTER ERROR 👉", error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    try {
      const res = await axios.post(`${API_URL}/login`, userData);
      console.log("LOGIN SUCCESS 👉", res.data);
      const user = {
        id: res.data.user?.id || res.data.id,
        name: res.data.user?.name || res.data.name,
        email: res.data.user?.email || res.data.email,
        token: res.data.token,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    } catch (error) {
      console.log("LOGIN ERROR 👉", error);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);
