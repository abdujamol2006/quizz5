import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: null, isAuthReady: false };
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state, { payload }) => {
      state.user = null;
    },
    isAuthChange: (state, { payload }) => {
      state.isAuthReady = true;
    },
  },
});
export const { isAuthChange, login, logout } = userSlice.actions;
export default userSlice.reducer;
