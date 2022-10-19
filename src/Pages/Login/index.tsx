import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { colors, distances } from "utils";
import { Formik } from "formik";
import { object, string } from "yup";
import { Button, TextField, Container } from "Components";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const WelcomeTitle = styled(Typography)`
  color: ${colors.blue500};
  padding-bottom: ${distances.px.l};
`;

const Buttons = styled.div`
  margin-top: ${distances.px.m};
  display: flex;
  justify-content: space-evenly;
`;
const loginSchema = object({
  password: string().required(),
  email: string().email().required(),
});

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={loginSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <WelcomeTitle variant="h3" textAlign="center">
              Login
            </WelcomeTitle>
            <TextField
              isFormInput
              errors={errors}
              touched={touched}
              variant="outlined"
              type="email"
              name="email"
              placeholder="Email..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <TextField
              isFormInput
              errors={errors}
              touched={touched}
              variant="outlined"
              type="password"
              name="password"
              placeholder="Password..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            <Buttons>
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
              <Button
                onClick={() => navigate(Routes.welcome)}
                variant="outlined"
                disabled={isSubmitting}
              >
                Cancel
              </Button>
            </Buttons>
          </Form>
        )}
      </Formik>
    </Container>
  );
};
