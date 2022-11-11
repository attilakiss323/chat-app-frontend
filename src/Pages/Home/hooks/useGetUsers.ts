import { useEffect } from "react";
import { api } from "utils";
import { useDispatch } from "react-redux";
import { setError } from "reduxToolkit";

export const useGetUsers = () => {
  const dispatch = useDispatch();
  const handleGetUsers = async () => {
    const response = await fetch(api.users);

    const users = await response.json();

    console.log("users", users);
    if (response.status !== 200 && response.status !== 201) {
      dispatch(setError(users));
      return;
    }

    // dispatch(setUser(user));
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return {
    handleGetUsers,
  };
};
