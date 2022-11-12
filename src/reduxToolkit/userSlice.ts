import { createSlice } from "@reduxjs/toolkit";

export interface CurrentuserType {
  firstName?: string;
  lastName?: string;
  email?: string;
}

export interface UserType {
  users: CurrentuserType[];
  currentUser: CurrentuserType;
}

const initialState: UserType = {
  users: [],
  currentUser: {
    firstName: undefined,
    lastName: undefined,
    email: undefined,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, data) => {
      state.currentUser = data.payload;
    },
    setUsers: (state, data) => {
      state.users = data.payload;
    },
    clearUsers: (state) => {
      state.currentUser = {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
      };
      state.users = [];
    },
  },
});

export const { setUsers, clearUsers, setCurrentUser } = userSlice.actions;

export default userSlice.reducer;
