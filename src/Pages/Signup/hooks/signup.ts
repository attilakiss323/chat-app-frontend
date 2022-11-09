import { post, api } from "utils";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";
import { useDispatch } from "react-redux";
import { setUser, setError } from "reduxToolkit";

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
      userName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
    };

    const response = await post(api.signup, body);

    const user = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      dispatch(setError(user));
      return;
    }

    dispatch(setUser(user));
    localStorage.setItem("isLoggedIn", "true");
    navigate(Routes.home, { state: { prevPath: "/login" } });
  };

  return {
    handleSignup,
  };
};
