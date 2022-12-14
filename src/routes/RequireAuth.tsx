import React from "react";
import { Navigate } from "react-router-dom";

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isLoggedIn = !!localStorage.getItem("token");

  if (isLoggedIn) {
    return children;
  }

  return <Navigate to={"/login"} />;
};
