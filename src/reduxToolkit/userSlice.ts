import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  userName?: string;
  email?: string;
}

const initialState: UserState = {
  userName: undefined,
  email: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, data) => {
      state = data.payload;
    },
    clearUser: (state) => {
      state = {
        userName: undefined,
        email: undefined,
      };
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
