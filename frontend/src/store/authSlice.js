import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../Api/Auth";

const AUTH_STORAGE_KEY = "syncspace.auth";
const authApi = new AuthApi();

const decodeTokenPayload = (token) => {
  try {
    const payload = token.split(".")[1];
    if (!payload) {
      return null;
    }

    return JSON.parse(atob(payload.replace(/-/g, "+").replace(/_/g, "/")));
  } catch {
    return null;
  }
};

const loadStoredAuth = () => {
  try {
    const storedAuth = localStorage.getItem(AUTH_STORAGE_KEY);
    return storedAuth ? JSON.parse(storedAuth) : null;
  } catch {
    return null;
  }
};

const saveStoredAuth = (auth) => {
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
};

const clearStoredAuth = () => {
  localStorage.removeItem(AUTH_STORAGE_KEY);
};

const storedAuth = loadStoredAuth();

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const data = await authApi.login({ email, password });

      if (!data?.token) {
        return rejectWithValue("Login succeeded but no token was returned.");
      }

      const tokenUser = decodeTokenPayload(data.token);

      return {
        token: data.token,
        user: data.user || {
          id: tokenUser?.id,
          email: tokenUser?.email || email,
        },
      };
    } catch (error) {
      return rejectWithValue(error.message || "Unable to sign in.");
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: storedAuth?.token || null,
    user: storedAuth?.user || null,
    isAuthenticated: Boolean(storedAuth?.token),
    status: "idle",
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.status = "idle";
      state.error = null;
      clearStoredAuth();
    },
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = Boolean(action.payload.token);
      state.error = null;
      saveStoredAuth({ token: state.token, user: state.user });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isAuthenticated = true;
        saveStoredAuth(action.payload);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Unable to sign in.";
        state.token = null;
        state.user = null;
        state.isAuthenticated = false;
        clearStoredAuth();
      });
  },
});

export const { logout, setCredentials } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;
