import React, { ReactElement } from "react";
import styled from "styled-components";
import welcomeBackground from "assets/welcome.jpg";
import { distances } from "utils";

const HorizontalContainer = styled.div`
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

const Box = styled.div<{ width?: number }>`
  background-color: #fff;
  padding: ${distances.px.l};
  border-radius: ${distances.px.m};
  width: ${({ width }) => `${width || 400}px`};
`;

export const Container = ({
  children,
  width,
}: {
  children: ReactElement | ReactElement[];
  width?: number;
}) => {
  return (
    <HorizontalContainer>
      <VerticalContainer>
        <Box width={width}>{children}</Box>
      </VerticalContainer>
    </HorizontalContainer>
  );
};
