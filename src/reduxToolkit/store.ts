import { configureStore } from "@reduxjs/toolkit";
import userReducer, { UserType } from "./userSlice";
import errorReducer, { ErrorType } from "./errorSlice";
import conversationReducer, { ConversationsType } from "./conversationSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    error: errorReducer,
    conversation: conversationReducer,
  },
});

export type AppStateType = {
  error: ErrorType;
  user: UserType;
  conversation: ConversationsType;
};

export type AppDispatch = typeof store.dispatch;
