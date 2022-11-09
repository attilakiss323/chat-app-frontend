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
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
