import React, {useState, useEffect, useRef} from "react";
import {ToastContainer, toast} from "react-toastify";
import validateForm from "./ValidateForm";
import axios from "axios";
import {
  RegisterInput,
  ErrorMessage,
  FormFieldWrapper,
  FieldLabel,
} from "./register/RegisterElements";
import { url } from "../../Constants";

const ForgotPassword = () => {
  const [passwordForm, setPasswordForm] = useState({
    password: "",
    confirmPassword: "",
    link: "",
  });
  const [errors, setErrors] = useState({});

  const firstRender = useRef(true);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPasswordForm({
      ...passwordForm,
      [name]: value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateForm(passwordForm));
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      if (Object.keys(errors).length === 0) {
        axios
          .post(`${url}/users/reset-password`, null, {
            params: {password: passwordForm.password, token: passwordForm.link},
          })
          .then((response) => {
            toast.success("Password has changed", {
              position: toast.POSITION.BOTTOM_LEFT,
            });
          })
          .catch((error) => {
            toast.error(
              `${error.response.data.status}: ${error.response.data.message}`,
              {
                position: toast.POSITION.BOTTOM_LEFT,
              }
            );
          });
      }
    }
  }, [errors]);

  return (
    <div className="bodyContainer">
      <h1>Change password</h1>
      <p>
        Paste the code recieved by email bellow, then proceed with the form:
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormFieldWrapper>
          <FieldLabel>Code Recieved In Email:</FieldLabel>
          <RegisterInput
            name="link"
            type="text"
            placeholder="Code from email..."
            value={passwordForm.link}
            onChange={(e) => handleChange(e)}
            error={"link" in errors ? "red" : "black"}
          />
          {errors.link && <ErrorMessage>{errors.link}</ErrorMessage>}
        </FormFieldWrapper>
        <FormFieldWrapper>
          <FieldLabel>New Password:</FieldLabel>
          <RegisterInput
            name="password"
            type="password"
            placeholder="Password..."
            value={passwordForm.password}
            onChange={(e) => handleChange(e)}
            error={"password" in errors ? "red" : "black"}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </FormFieldWrapper>
        <FormFieldWrapper>
          <FieldLabel>Confirm Password:</FieldLabel>
          <RegisterInput
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password..."
            value={passwordForm.confirmPassword}
            onChange={(e) => handleChange(e)}
            error={"confirmPassword" in errors ? "red" : "black"}
          />
          {errors.confirmPassword && (
            <ErrorMessage>{errors.confirmPassword}</ErrorMessage>
          )}
        </FormFieldWrapper>
        <button className="submit_button" type="submit">
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
