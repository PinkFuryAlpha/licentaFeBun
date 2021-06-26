import React, {useState, useEffect, useRef} from "react";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import {url} from "../../../../Constants";
import Modal from "react-modal";
import validateForm from "../../ValidateForm";
import "./ResetPasswordForm.css";
import {
  ErrorMessage,
  FieldLabel,
  FormFieldWrapper,
  RegisterInput,
} from "../../register/RegisterElements";

const customStyles = {
  content: {
    background: "black",
    height: "80%",
    width: "50%",
    marginLeft: "25%",
    alignItems: "center",
  },
};

Modal.setAppElement("#root");
const ResetPasswordForm = ({isModalOpen, modalHandler}) => {
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
          .post(`${passwordForm.link}`, null, {
            params: {password: passwordForm.password},
          })
          .then((response) => {
            toast.success("Registered succsesfully", {
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
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => {
          modalHandler();
          firstRender.current = true;
        }}
        style={customStyles}
      >
        <h1>Change password</h1>
        <p>
          Paste the code recieved by email bellow, then proceed with the form:
        </p>
        <form onSubmit={(e) => handleSubmit(e)}>
          <FormFieldWrapper>
            <FieldLabel>Link:</FieldLabel>
            <RegisterInput
              name="link"
              type="text"
              placeholder="Link from email..."
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
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default ResetPasswordForm;
