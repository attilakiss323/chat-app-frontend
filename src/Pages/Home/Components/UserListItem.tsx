import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";

type UserListItemType = {
  name: string;
  handleSelectUser(): void;
};

export const UserListItem = ({ name, handleSelectUser }: UserListItemType) => {
  return (
    <ListItem onClick={handleSelectUser}>
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};
