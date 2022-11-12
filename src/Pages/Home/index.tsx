import React from "react";
import styled from "styled-components";
import { colors, distances } from "utils";
import { TextField, Container, MenuAppBar } from "Components";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import List from "@mui/material/List";
import { UserListItem } from "./Components";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useGetUsers } from "./hooks/useGetUsers";
import { useSelector } from "react-redux";
import { AppStateType } from "reduxToolkit";

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
  useGetUsers();
  const users = useSelector((state) => (state as AppStateType).user.users);

  return (
    <>
      <MenuAppBar />
      <Container width={1000}>
        <Wrapper>
          <UserWrapper>
            <TextField fullWidth />
            <SearchButton>
              <SearchIcon />
            </SearchButton>
            <UserList>
              {users.map((user) => (
                <UserListItem name={`${user.firstName} ${user.lastName}`} />
              ))}
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
    </>
  );
};
