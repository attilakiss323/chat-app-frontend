import { useEffect } from "react";
import { api, get } from "utils";
import { useDispatch } from "react-redux";
import { setError, setUsers } from "reduxToolkit";
import { useSelector } from "react-redux";
import { AppStateType } from "reduxToolkit";

export const useGetUsers = () => {
  const users = useSelector((state) => (state as AppStateType).user.users);
  const dispatch = useDispatch();

  const handleGetUsers = async () => {
    const response = await get(api.users);

    const users = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      dispatch(setError(users));
      return;
    }

    dispatch(setUsers(users));
  };

  useEffect(() => {
    handleGetUsers();
  }, []);

  return {
    handleGetUsers,
    users,
  };
};
