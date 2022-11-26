import { useEffect, useState } from "react";
import { api, post } from "utils";
import { useDispatch } from "react-redux";
import {
  setError,
  AppStateType,
  setConversation,
  selectConversationByUserEmail,
  selectUserByEmail,
} from "reduxToolkit";
import { useSelector } from "react-redux";

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

  const handleGetConversation = async (contact: string) => {
    console.log("contact", contact);
    const body = {
      email: currentUser.email,
      contact,
    };

    const response = await post(api.conversation, body);

    const data = await response.json();

    console.log("data", data);

    if (response.status !== 200 && response.status !== 201) {
      dispatch(setError(data.conversation));
      return;
    }

    dispatch(setConversation(data.conversation));
  };

  return {
    handleGetConversation,
    setSelectedContactEmail,
    selectedContactEmail,
    conversation,
    selectedUser,
  };
};
