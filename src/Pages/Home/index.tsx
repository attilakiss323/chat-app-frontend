import React from "react";
import styled from "styled-components";
import { colors, distances } from "utils";
import { TextField, Container, MenuAppBar } from "Components";
import List from "@mui/material/List";
import { UserListItem } from "./Components";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useGetUsers, useGetConversation } from "./hooks";
import { useUserOnline } from "hooks";

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

const Chat = styled.div`
  margin-bottom: ${distances.px.l};
  padding: ${distances.px.l};
  height: 330px;
  border: 1px solid ${colors.black};
  display: flex;
  flex-direction: column-reverse;
`;

const Row = styled.div`
  margin: 2px 0;
`;

const MyRow = styled(Row)`
  text-align: right;
`;

const ContactRow = styled(Row)`
  text-align: left;
`;

const Message = styled.div`
  display: inline-block;
  padding: ${distances.px.m};
  border-radius: ${distances.px.l};
`;

const MyMessage = styled(Message)`
  background-color: ${colors.blue500};
  color: ${colors.white};
`;

const ContactMessage = styled(Message)`
  background-color: ${colors.gray300};
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
  useUserOnline();
  const { users, currentUser } = useGetUsers();
  const { conversation, setSelectedContactEmail, handleSetConversation } =
    useGetConversation();

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
                <UserListItem
                  key={user.email}
                  name={`${user.firstName} ${user.lastName}`}
                  isOnline={user.isOnline}
                  handleSelectUser={() => {
                    setSelectedContactEmail(user.email!);
                    handleSetConversation(user.email!);
                  }}
                />
              ))}
            </UserList>
          </UserWrapper>
          <ChatWrapper>
            <Chat>
              <>
                <MyRow>
                  <MyMessage>User message</MyMessage>
                </MyRow>
                <ContactRow>
                  <ContactMessage>Reply message</ContactMessage>
                </ContactRow>
                {conversation?.messages.map((message) =>
                  message.name ===
                  `${currentUser.firstName} ${currentUser.lastName}` ? (
                    <MyRow key={message.text}>
                      <MyMessage>{message.text}</MyMessage>
                    </MyRow>
                  ) : (
                    <ContactRow key={message.text}>
                      <ContactMessage>{message.text}</ContactMessage>
                    </ContactRow>
                  )
                )}
              </>
            </Chat>
            <TextField fullWidth />
          </ChatWrapper>
        </Wrapper>
      </Container>
    </>
  );
};
