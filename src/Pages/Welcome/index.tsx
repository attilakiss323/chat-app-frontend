import React from "react";
import welcomeBackground from "assets/welcome.jpg";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { colors, distances } from "utils";
import { useNavigate } from "react-router-dom";
import { Button } from "Components";
import { Routes } from "routes";

const Container = styled.div`
  background-image: url(${welcomeBackground});
  position: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Box = styled.div`
  background-color: #fff;
  padding: ${distances.px.l};
  border-radius: ${distances.px.m};
  width: 400px;
`;

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
      <VerticalContainer>
        <Box>
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
        </Box>
      </VerticalContainer>
    </Container>
  );
};
