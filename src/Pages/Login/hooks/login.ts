import { post, api } from "utils";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";
import { useDispatch } from "react-redux";
import { setUser, setError } from "reduxToolkit";

type LoginData = {
  email: string;
  password: string;
};

export const useUserLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (data: LoginData) => {
    const body = {
      email: data.email,
      password: data.password,
    };

    const response = await post(api.login, body);

    const user = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      dispatch(setError(user));
      return;
    }

    dispatch(setUser(user));
    navigate(Routes.home);
  };

  return {
    handleLogin,
  };
};
