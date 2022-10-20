import { post } from "utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const useUserSignup = () => {
  const [status, setStatus] = useState<number | undefined>(undefined);
  const [data, setData] = useState();
  const navigate = useNavigate();

  const handleSignup = (data: SignupData) => {
    console.log("data", data);

    const body = {
      userName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
    };

    post("/signup", body)
      .then((response) => {
        setStatus(response.status);

        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  };

  console.log(status, data);

  return {
    handleSignup,
  };
};
