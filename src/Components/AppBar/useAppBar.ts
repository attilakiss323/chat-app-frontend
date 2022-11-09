import { useState, MouseEvent } from "react";
import { post, api } from "utils";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";
import { useDispatch } from "react-redux";
import { clearUser, setError } from "reduxToolkit";

export const useAppBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleMenuClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignout = async () => {
    const response = await post(api.signout);

    const user = await response.json();

    if (response.status !== 200 && response.status !== 201) {
      dispatch(setError(user));
      return;
    }

    dispatch(clearUser());
    localStorage.setItem("isLoggedIn", "false");
    navigate(Routes.welcome);
  };

  return {
    handleSignout,
    handleMenuClick,
    handleMenuClose,
    anchorEl,
  };
};
