import styled from "styled-components";
import {Link} from "react-router-dom";

export const LoginContainer = styled.div`
  border-top: 3px solid black;
  background: #cc00cc;
  background-image: linear-gradient(#ff7733, #15cdfc);
  display: block;
  width: 100vw;
  height: 100vh;
  position: relative;
  top: 0;
`;

export const LoginBoxContainer = styled.div`
  background: #fff;
  margin: auto;
  border-radius: 10px;
  margin-top: 60px;
  width: 450px;
  height: 500px;
  display: flex;
  position: relative;
  /* box-shadow:2px 2px 1px #ff7733; */

  @media only screen and (min-width: 768px) {
    width: 700px;
    height: 600px;
  }
`;

export const LoginHeader = styled.h1`
  margin-left: 10%;
  color: #fff;
`;

export const BackDrop = styled.div`
  width: 50%;
  height: 80px;
  position: absolute;
  top: 0;
  flex-direction: column;
  padding-bottom: 10px;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 10px;
  background: #ff7733;
  background-image: linear-gradient(58deg, #ff7733, #15cdfc);
`;
export const BottomDrop = styled.div`
  width: 50%;
  height: 80px;
  position: absolute;
  bottom: 0px;
  flex-direction: column;
  padding-top: 10px;
  border-top-left-radius: 50%;
  border-bottom-left-radius: 10px;
  background: #ff7733;
  background-image: linear-gradient(58deg, #15cdfc, #ff7733);
`;

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 55%;
  z-index: 100;

  @media only screen and (min-width: 768px) {
    margin-top: 40%;
  }
`;

export const SubmitButton = styled.button`
  width: 80%;
  margin-top: 15px;
  padding: 14px;
  color: #010606;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    color: #ff7733;
  }
`;

export const Input = styled.input`
  width: 70%;
  height: 42px;
  margin-top:15px;
  outline: none;
  border: 1px solid black;
  padding: 0px 10px;

  &.focus {
    outline: none;
    border-bottom: 2px solid #ff7733;
  }

  @media only screen and (min-width: 768px) {
    margin-top: 30px;
    margin-bottom: 15px;
  }
`;

export const MutedLink = styled(Link)`
  font-size: 14px;
  color: #a9a9a9;
  font-weight: 500;
  text-decoration: none;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    color: #010606;
  }
`;

export const HighlightedLink = styled(Link)`
  font-size: 14px;
  color: black;
  font-weight: 500;
  text-decoration: none;
  margin-top: 15px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    color: #010606;
  }
`;

export const LoginFormContainer = styled.div`
  width: 50%;
  height: 100%; ;
`;

export const LoginImageWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginImg = styled.div`
  width: 100%;
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  @media only screen and (min-width: 768px) {
    height: 600px;
  }
`;
