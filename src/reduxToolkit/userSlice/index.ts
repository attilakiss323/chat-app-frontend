import { createSlice, current } from "@reduxjs/toolkit";

export interface CurrentuserType {
  firstName?: string;
  lastName?: string;
  email?: string;
  isOnline: boolean;
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
    isOnline: false,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCurrentUser: (state, data) => {
      state.currentUser = data.payload;
    },
    setCurrentUserOnline: (state) => {
      state.currentUser.isOnline = true;
    },
    setUserOnline: (state, data) => {
      data.payload.onlineUsers.forEach((email: string) => {
        const existingUserIndex = state.users.findIndex(
          (user) => user.email === email
        );

        console.log("state.users", state.users, existingUserIndex, email);
        if (existingUserIndex > -1) {
          state.users[existingUserIndex].isOnline = true;
        }
      });
    },
    setUsers: (state, data) => {
      state.users = data.payload.users;
      state.currentUser = data.payload.currentUser;
    },
    clearUsers: (state) => {
      state.currentUser = {
        firstName: undefined,
        lastName: undefined,
        email: undefined,
        isOnline: false,
      };
      state.users = [];
    },
  },
});

export const {
  setUsers,
  clearUsers,
  setCurrentUser,
  setCurrentUserOnline,
  setUserOnline,
} = userSlice.actions;

export default userSlice.reducer;
