import React, {useState, useContext} from "react";
import {UserContext} from "../../context/UserContext";
import LoginImage from "./loginImg.jpg";
import {url} from "../../../Constants";
import axios from "axios";
import {ToastContainer, toast} from "react-toastify";
import {useHistory} from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  BackDrop,
  BottomDrop,
  HighlightedLink,
  LoginBoxContainer,
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginHeader,
  LoginImageWrapper,
  LoginImg,
  MutedLink,
  Input,
  SubmitButton,
} from "./LoginElements";

const Login = () => {
  const history = useHistory();

  const {user, setUser} = useContext(UserContext);

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value.trim(),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.username || !formValues.password) {
      toast.info("Complete form fields!", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } else {
      axios
        .post(`${url}/users/authenticate`, formValues)
        .then((res) => {
          setUser(res);
          history.push("/music");
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
  };

  return (
    <LoginContainer>
      <ToastContainer />
      <LoginBoxContainer>
        <LoginFormContainer>
          <BackDrop>
            <LoginHeader>Login Form</LoginHeader>
          </BackDrop>
          <LoginForm onSubmit={(e) => handleSubmit(e)}>
            <Input
              type="text"
              name="username"
              placeholder="Username..."
              value={formValues.username}
              onChange={(e) => handleChange(e)}
            />
            <Input
              type="password"
              name="password"
              placeholder="Password..."
              value={formValues.password}
              onChange={(e) => handleChange(e)}
            />
            <SubmitButton type="submit">Login</SubmitButton>
            <MutedLink to="/about">Forgot Password?</MutedLink>
            <HighlightedLink to="/sign-up">
              New Here? Register now!
            </HighlightedLink>
          </LoginForm>
          <BottomDrop></BottomDrop>
        </LoginFormContainer>
        <LoginFormContainer>
          <LoginImageWrapper>
            <LoginImg>
              <img src={LoginImage} alt="Girl-listening-to-music" />
            </LoginImg>
          </LoginImageWrapper>
        </LoginFormContainer>
      </LoginBoxContainer>
    </LoginContainer>
  );
};

export default Login;
