import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import validateInfo from "./validation";
import {useMediaQuery} from "react-responsive";
import {ToastContainer, toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {url} from "../../../Constants";
import {
  BottomPart,
  FormTitle,
  TopPart,
  RegisterBoxContainer,
  RegisterContainer,
  RegisterForm,
  FieldLabel,
  RegisterInput,
  FormFieldWrapper,
  SubmitRegister,
  ShowPassword,
  ErrorMessage,
} from "./RegisterElements";

const Register = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const [showPassword, setPasswordShown] = useState(false);

  let initialRender = useRef(true);

  const isMobile = useMediaQuery({maxWidth: 768});

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value.trim(),
    });
  };

  useEffect(() => console.log(errors), [errors]);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      console.log("called api");
      if (Object.keys(errors).length === 0) {
        console.log(formValues);
        console.log(url);
        axios
          .post(`${url}/register`, formValues)
          .then((response) => {
            console.log(response);
            toast.success("Registered succsesfully", {
              position: toast.POSITION.BOTTOM_LEFT,
            });
          })
          .catch((error) => {
            toast.error(`${error.response.data.status}: ${error.response.data.message}`, {
              position: toast.POSITION.BOTTOM_LEFT,
            });
          });
      }
    }
  }, [errors]);

  const togglePassword = () => {
    setPasswordShown(showPassword ? false : true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateInfo(formValues));
  };

  return (
    <RegisterContainer>
      <ToastContainer />
      <RegisterBoxContainer>
        <TopPart>
          <FormTitle>Register for free</FormTitle>
        </TopPart>
        <RegisterForm onSubmit={(e) => handleSubmit(e)}>
          <FormFieldWrapper>
            <FieldLabel>First Name:</FieldLabel>
            <RegisterInput
              name="firstName"
              type="text"
              placeholder="First name..."
              value={formValues.firstName}
              onChange={(e) => handleChange(e)}
              error={"firstName" in errors ? "red" : "black"}
            />
            {errors.firstName && (
              <ErrorMessage>{errors.firstName}</ErrorMessage>
            )}
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FieldLabel>Last Name:</FieldLabel>
            <RegisterInput
              name="lastName"
              type="text"
              placeholder="Last name..."
              value={formValues.lastName}
              onChange={(e) => handleChange(e)}
              error={"lastName" in errors ? "red" : "black"}
            />
            {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FieldLabel>Username:</FieldLabel>
            <RegisterInput
              name="username"
              type="text"
              placeholder="Username..."
              value={formValues.username}
              onChange={(e) => handleChange(e)}
              error={"username" in errors ? "red" : "black"}
            />
            {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FieldLabel>Email:</FieldLabel>
            <RegisterInput
              name="email"
              type="text"
              placeholder="Email..."
              value={formValues.email}
              onChange={(e) => handleChange(e)}
              error={"email" in errors ? "red" : "black"}
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormFieldWrapper>
          <FormFieldWrapper>
            <FieldLabel>Passoword:</FieldLabel>
            <RegisterInput
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password..."
              value={formValues.password}
              onChange={(e) => handleChange(e)}
              error={"password" in errors ? "red" : "black"}
            />
            <ShowPassword onClick={togglePassword} />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormFieldWrapper>
          <SubmitRegister type="submit">Register</SubmitRegister>
        </RegisterForm>
        <BottomPart></BottomPart>
      </RegisterBoxContainer>
    </RegisterContainer>
  );
};

export default Register;
