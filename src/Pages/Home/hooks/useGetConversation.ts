import { useEffect } from "react";
import { api, post } from "utils";
import { useDispatch } from "react-redux";
import { setError, AppStateType } from "reduxToolkit";
import { useSelector } from "react-redux";

export const useGetConversation = () => {
  // const conversation = useSelector((state) => (state as AppStateType).conversation);

  console.log("does this render");
  const currentUser = useSelector(
    (state) => (state as AppStateType).user.currentUser
  );
  const dispatch = useDispatch();

  const handleGetConversation = async () => {
    const body = {
      email: currentUser.email,
    };

    console.log("email", body);
    const response = await post(api.conversation, body);

    console.log("response", response);
    const conversation = await response.json();

    console.log("conversation", conversation);
    if (response.status !== 200 && response.status !== 201) {
      dispatch(setError(conversation));
      return;
    }
    // dispatch(setConversation(conversation));
  };

  useEffect(() => {
    console.log("does this happen", currentUser.email);
    if (currentUser.email) {
      handleGetConversation();
    }
  }, [currentUser.email]);

  return {
    handleGetConversation,
  };
};
