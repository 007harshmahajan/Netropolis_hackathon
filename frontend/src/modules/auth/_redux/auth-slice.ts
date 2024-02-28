import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  accessToken: string | null;
  role: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  email: null,
  firstName: null,
  lastName: null,
  accessToken: null,
  role: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser(
      state,
      action: PayloadAction<{
        email: string;
        firstName: string;
        lastName: string;
        accessToken: string;
        role: string;
      }>
    ) {
      state.email = action.payload.email;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.accessToken = action.payload.accessToken;
      state.role = action.payload.role;
      state.isAuthenticated = true;
    },
    logoutUser(state) {
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.accessToken = null;
      state.role = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;
