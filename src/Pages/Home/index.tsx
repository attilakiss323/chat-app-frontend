import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { colors, distances } from "utils";
import { TextField, Container } from "Components";
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import List from "@mui/material/List";
import { UserListItem } from "./Components";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const WelcomeTitle = styled(Typography)`
  color: ${colors.blue500};
  padding-bottom: ${distances.px.l};
`;

const Wrapper = styled.div`
  display: flex;
`;

const ChatWrapper = styled.div`
  margin-left: ${distances.px.l};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Chat = styled(TextareaAutosize)`
  margin-bottom: ${distances.px.l};
  padding: ${distances.px.l};
  resize: none;
`;

const UserWrapper = styled.div`
  max-width: 360px;
  width: 100%;
  position: relative;
`;

const UserList = styled(List)`
  background-color: ${colors.white};
  height: 349px;
  border-radius: 4px;
  && {
    margin-top: ${distances.px.l};
    border: 1px solid ${colors.black};
  }
`;

const SearchButton = styled(IconButton)`
  && {
    position: absolute;
  }
  left: 320px;
  top: 10px;
`;

export const Home = () => {
  const navigate = useNavigate();

  return (
    <Container width={1000}>
      <WelcomeTitle variant="h5" textAlign="center">
        Chat App
      </WelcomeTitle>
      <Wrapper>
        <UserWrapper>
          <TextField fullWidth />
          <SearchButton>
            <SearchIcon />
          </SearchButton>
          <UserList>
            <UserListItem name="Johan Doe" />
            <UserListItem name="Richard Roe" />
          </UserList>
        </UserWrapper>
        <ChatWrapper>
          <Chat
            aria-label="minimum height"
            minRows={21}
            placeholder="Chat..."
          />
          <TextField fullWidth />
        </ChatWrapper>
      </Wrapper>
    </Container>
  );
};
