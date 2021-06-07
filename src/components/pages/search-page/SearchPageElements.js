import styled from "styled-components";

export const SearchPageTitle = styled.h1`
  cursor: context-menu;
  font-size: 30px;
  color: #fff;
  margin-top: 10px;
  font-weight: 500;
  text-decoration: none;
  padding-left: 10px;
`;

export const SearchBarWrapper = styled.div`
  display: block;
`;

export const SearchInput = styled.input`
  width: 70%;
  height: 42px;
  margin-top: 15px;
  outline: none;
  border: 1px solid black;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 0px 10px;

  &.focus {
    outline: none;
    border-bottom: 2px solid #ff7733;
  }
`;

export const SearchButton = styled.button`
  width: 10%;
  padding: 10.5px;
  padding-bottom: 12px;
  color: #010606;
  font-size: 15px;
  font-weight: 600;
  border: 1px solid black;
  border-left: none;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #15cdfc;
    color: #ff7733;
  }
`;
