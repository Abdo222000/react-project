import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: null,
  usermail: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.usermail = action.payload.usermail;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.username = null;
      state.usermail = null;
      state.isLoggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
