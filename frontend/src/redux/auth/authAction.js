import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:8080/api/auth";

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
      console.log("SERVER RESPONSE DATA:", error.response?.data);
  console.error("LOGIN ERROR 👉", error)
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Signup failed"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (userData, thunkAPI) => {
    console.log("TESTING: IS THIS FILE UPDATED? PORT SHOULD BE 8080");
    try {
      const res = await axios.post("http://localhost:8080/api/auth/login", userData);
      console.log("LOGIN SUCCESS 👉", res.data);
      const user = {
        id: res.data.user?.id || res.data.id,
        name: res.data.user?.name || res.data.name,
        email: res.data.user?.email || res.data.email,
        token: res.data.token,
      };
      localStorage.setItem("user", JSON.stringify(user));
      return user;

      console.log(res.data);
    } catch (err) {
      console.log("SERVER RESPONSE DATA:", err.response?.data);
  console.error("LOGIN ERROR 👉", err)
      
  return thunkAPI.rejectWithValue(
    err.response?.data?.message || "Login failed"
  );
    }
  }
);
