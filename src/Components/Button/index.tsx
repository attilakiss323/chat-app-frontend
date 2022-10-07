import React from "react";
import { Button as MuiButton, ButtonProps } from "@mui/material";
import styled from "styled-components";
import { colors } from "utils";

const getBackgroundColor = (variant: ButtonProps["variant"]) => {
  if (variant === "contained") {
    return colors.blue500;
  }

  return "transparent";
};

const getBackgroundHover = (variant: ButtonProps["variant"]) => {
  if (variant === "contained") {
    return colors.blue700;
  }

  return "transparent";
};

const getBorder = (variant: ButtonProps["variant"]) => {
  if (variant === "outlined") {
    return colors.blue500;
  }

  return "none";
};

const getColor = (variant: ButtonProps["variant"]) => {
  if (variant === "outlined") {
    return colors.blue500;
  }

  return "#fff";
};

const StyledButton = styled(MuiButton)`
  width: 100px;
  && {
    background-color: ${({ variant }) => getBackgroundColor(variant)};
    border: ${({ variant }) => getBorder(variant)};
    color: ${({ variant }) => getColor(variant)};
  }

  &&:hover {
    background-color: ${({ variant }) => getBackgroundHover(variant)};
    border: ${({ variant }) => getBorder(variant)};
  }
`;

export const Button = ({ variant, ...rest }: ButtonProps) => {
  return <StyledButton variant={variant} {...rest} />;
};
