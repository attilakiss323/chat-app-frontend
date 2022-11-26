import { createSlice, current } from "@reduxjs/toolkit";

export interface ConversationsType {
  conversations: ConversationType[];
}

export interface ConversationType {
  contact?: string;
  messages: MessageType[];
}

export interface MessageType {
  name: string;
  text: string;
}

const initialState: ConversationsType = {
  conversations: [],
};

export const conversationSlice = createSlice({
  name: "conversation",
  initialState,
  reducers: {
    setConversation: (state, data) => {
      const index = state.conversations.findIndex(
        ({ contact }) => contact === data.payload.email
      );

      if (index) {
        delete state.conversations[index];
      }

      state.conversations.push(data.payload);
    },
    clearConvesation: (state) => {
      state.conversations = [];
    },
  },
});

export const { setConversation, clearConvesation } = conversationSlice.actions;

export default conversationSlice.reducer;
