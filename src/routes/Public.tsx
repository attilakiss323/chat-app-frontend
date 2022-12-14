import React from "react";
import { Navigate } from "react-router-dom";

export const Public = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (isLoggedIn) {
    return <Navigate to={"/home"} />;
  }

  return children;
};
