import { createSelector } from "@reduxjs/toolkit";
import { AppStateType } from "reduxToolkit";

const selectUsers = (state: AppStateType) => state.user.users;

export const selectUserByEmail = createSelector(
  [selectUsers, (state, email) => email],
  (users, email) => {
    return users.find(
      ({ email: userEmail }: { email?: string }) => userEmail === email
    );
  }
);
