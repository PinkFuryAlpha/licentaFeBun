import styled from "styled-components";
import {GiEvilEyes} from "react-icons/gi";
import {
  BackDrop,
  BottomDrop,
  LoginForm,
  LoginContainer,
  SubmitButton,
} from "../login/LoginElements";

export const RegisterContainer = styled(LoginContainer)`
  width: 100vw;
  height: 100vh;

  @media only screen and (min-width: 768px) {
    height: 1200px;
  }
`;

export const RegisterBoxContainer = styled.div`
  background: #fff;
  margin: auto;
  border-radius: 10px;
  margin-top: 60px;
  width: 450px;
  height: 700px;
  display: flex;
  position: relative;

  @media only screen and (min-width: 768px) {
    width: 700px;
    height: 900px;
  }
`;

export const TopPart = styled(BackDrop)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BottomPart = styled(BottomDrop)`
  width: 100%;
  height: 60px;
`;

export const FormTitle = styled.h1`
  color: #fff;
  font-weight: 600;
`;

export const RegisterForm = styled(LoginForm)`
  margin-top: 16%;

  @media only screen and (min-width: 768px) {
    margin-top: 10%;
  }
`;

export const FieldLabel = styled.label`
  font-size: 14px;
  color: #a9a9a9;
  font-weight: 500;
  text-decoration: none;
  margin-top: 15px;
  margin-left: 12.3%;
  z-index: 10;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const FormFieldWrapper = styled.div`
  width: 100%;
  display: inline-block;
  margin-top: 5px;
  margin-bottom: 25px;
  z-index: -1;

  @media only screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 25px;
  }
`;

export const RegisterInput = styled.input`
  width: 70%;
  height: 42px;
  outline: none;
  border: 1px solid ${(props) => props.error};
  padding: 0px 10px;
  margin-left: 12.3%;
  position: relative;

  @media only screen and (min-width: 768px) {
    margin-top: 10px;
    font-size: 17px;
  }
`;

export const ErrorMessage = styled.p`
  font-size: 10px;
  color: red;
  margin-left: 12.3%;
  position: absolute;
  padding-bottom: 20px;

  @media only screen and (min-width: 768px) {
    font-size: 15px;
  }
`;

export const SubmitRegister = styled(SubmitButton)`
  width: 60%;
  margin-top: 30px;

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    font-size: 20px;
  }
`;

export const ShowPassword = styled(GiEvilEyes)`
  cursor: pointer;
  position: absolute;
  font-size: 20px;
  top: 70%;
  right: 16%;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    color: #010606;
    border-radius: 25px;
  }

  @media only screen and (min-width: 768px) {
    top: 71.5%;
  }
`;
