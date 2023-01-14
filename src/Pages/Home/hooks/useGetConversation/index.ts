import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setError,
  AppStateType,
  setConversation,
  selectConversationByUserEmail,
  selectUserByEmail,
  ConversationType,
} from "reduxToolkit";
import { useSelector } from "react-redux";
import { socket, SocketNames } from "sockets";

export const useGetConversation = () => {
  const [selectedContactEmail, setSelectedContactEmail] = useState("");
  const conversation = useSelector((state: AppStateType) =>
    selectConversationByUserEmail(state, selectedContactEmail)
  );
  const selectedUser = useSelector((state: AppStateType) =>
    selectUserByEmail(state, selectedContactEmail)
  );

  const currentUser = useSelector(
    (state) => (state as AppStateType).user.currentUser
  );
  const dispatch = useDispatch();

  const handleSetConversation = (contact: string) => {
    socket.emit(
      SocketNames.conversation,
      {
        email: currentUser.email,
        contact,
      },
      (response: { conversation?: ConversationType; error?: string }) => {
        if (response.error) {
          dispatch(setError(response.error));
          return;
        }

        dispatch(setConversation(response.conversation!));
      }
    );
  };

  return {
    handleSetConversation,
    setSelectedContactEmail,
    selectedContactEmail,
    conversation,
    selectedUser,
  };
};
