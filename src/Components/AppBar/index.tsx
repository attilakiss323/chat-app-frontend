import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import { useAppBar } from "./useAppBar";
import { colors, distances } from "utils";
import Divider from "@mui/material/Divider";
import styled from "styled-components";

const StyledDivider = styled(Divider)`
  && {
    height: ${distances.px.l};
    margin-left: ${distances.px.m};
  }
  background: white;
`;

export const MenuAppBar = () => {
  const {
    handleSignout,
    handleMenuClick,
    handleMenuClose,
    anchorEl,
    currentUser,
  } = useAppBar();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ background: colors.blue500 }}>
        <Toolbar>
          <div>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuClick}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              PaperProps={{
                style: {
                  width: "20ch",
                },
              }}
            >
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            </Menu>
          </div>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chat App
          </Typography>
          <div>
            {currentUser.firstName} {currentUser.lastName}
          </div>
          <StyledDivider orientation="vertical" />
          <Button color="inherit" onClick={handleSignout}>
            Sign out
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
