import { createSelector } from "@reduxjs/toolkit";
import { AppStateType } from "reduxToolkit";

const selectConversations = (state: AppStateType) =>
  state.conversation.conversations;

export const selectConversationByUserEmail = createSelector(
  [selectConversations, (state, email) => email],
  (conversations, email) => {
    return conversations.find(
      ({ contact }: { contact?: string }) => contact === email
    );
  }
);
