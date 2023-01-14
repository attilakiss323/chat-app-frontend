import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import PersonIcon from "@mui/icons-material/Person";
import styled from "styled-components";
import { distances, colors } from "utils";

type UserListItemType = {
  name: string;
  isOnline: boolean;
  handleSelectUser(): void;
};

const OnlineStatusIndicator = styled.div<{ isOnline: boolean }>`
  height: ${distances.px.m};
  width: ${distances.px.m};
  background: ${({ isOnline }) => (isOnline ? colors.green500 : colors.white)};
  border: 1px solid ${colors.gray700};
  position: absolute;
  left: 50px;
  top: 40px;
  border-radius: 4px;
`;

export const UserListItem = ({
  name,
  isOnline,
  handleSelectUser,
}: UserListItemType) => {
  return (
    <ListItem onClick={handleSelectUser}>
      <ListItemAvatar>
        <Avatar>
          <PersonIcon />
        </Avatar>
        <OnlineStatusIndicator isOnline={isOnline} />
      </ListItemAvatar>
      <ListItemText primary={name} />
    </ListItem>
  );
};
