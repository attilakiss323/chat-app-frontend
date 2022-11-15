import { post, api } from "utils";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";
import { useDispatch } from "react-redux";
import { setCurrentUser, setError } from "reduxToolkit";

type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const useUserSignup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignup = async (data: SignupData) => {
    const body = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    const response = await post(api.signup, body);

    const { user, token } = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      dispatch(setError(user));
      return;
    }

    dispatch(setCurrentUser(user));
    localStorage.setItem("token", token);
    navigate(Routes.home, { state: { prevPath: "/login" } });
  };

  return {
    handleSignup,
  };
};
