import React from "react";
import welcomeBackground from "assets/welcome.jpg";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { colors, distances } from "utils";
import { useNavigate } from "react-router-dom";
import { Button, Container } from "Components";
import { Routes } from "routes";

const WelcomeTitle = styled(Typography)`
  color: ${colors.blue500};
  padding-bottom: ${distances.px.l};
`;

const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  width: 208px;
  justify-content: space-between;
`;

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <WelcomeTitle variant="h1" textAlign="center">
        Chat App
      </WelcomeTitle>
      <ButtonContainer>
        <Button onClick={() => navigate(Routes.login)} variant="contained">
          Login
        </Button>
        <Button onClick={() => navigate(Routes.signup)} variant="contained">
          Sign up
        </Button>
      </ButtonContainer>
    </Container>
  );
};
