import React from "react";
import {
  TextField as MuiTextField,
  TextFieldProps as MuiTextFieldProps,
} from "@mui/material";
import styled from "styled-components";
import { distances } from "utils";

const StyledTextField = styled(MuiTextField)`
  && {
    margin-bottom: ${({ error }) => (error ? "1px" : distances.px.xl)};
  }
`;

type TextFieldProps = MuiTextFieldProps & {
  errors?: Record<string, string>;
  touched?: Record<string, boolean>;
};

export const TextField = ({ errors, touched, ...rest }: TextFieldProps) => {
  return (
    <StyledTextField
      error={!!(errors?.[rest.name!] && touched?.[rest.name!])}
      helperText={
        !!(errors?.[rest.name!] && touched?.[rest.name!])
          ? errors[rest.name!]
          : null
      }
      {...rest}
    />
  );
};
