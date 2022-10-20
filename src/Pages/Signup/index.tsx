import React from "react";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { colors, distances } from "utils";
import { Formik } from "formik";
import { object, string, ref } from "yup";
import { Button, TextField, Container } from "Components";
import { useNavigate } from "react-router-dom";
import { Routes } from "routes";
import { useUserSignup } from "./hooks";

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

const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const signupSchema = object({
  firstName: string().required(),
  lastName: string().required(),
  password: string().required(),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required(),
  email: string().email().required(),
});

export const Signup = () => {
  const navigate = useNavigate();
  const { handleSignup } = useUserSignup();

  return (
    <Container>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        onSubmit={(values, { resetForm }) => {
          handleSignup(values);
          resetForm();
        }}
        validationSchema={signupSchema}
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
              Sign up
            </WelcomeTitle>
            <NameContainer>
              <TextField
                isFormInput
                errors={errors}
                touched={touched}
                variant="outlined"
                type="text"
                name="firstName"
                placeholder="First Name..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
              />
              <TextField
                isFormInput
                errors={errors}
                touched={touched}
                variant="outlined"
                type="text"
                name="lastName"
                placeholder="Last Name..."
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
              />
            </NameContainer>
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
            <TextField
              isFormInput
              errors={errors}
              touched={touched}
              variant="outlined"
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password..."
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmPassword}
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
