import { post } from "utils";

type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const userSignup = () => {
  const handleSignup = (data: SignupData) => {
    console.log("data", data);

    const body = {
      userName: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
    };

    post("/signup", body).then((data) => {
      console.log("data", data); // JSON data parsed by `data.json()` call
    });
  };

  return {
    handleSignup,
  };
};
