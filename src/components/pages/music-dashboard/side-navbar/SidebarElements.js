import styled from "styled-components";
import {ImProfile, ImHeart, ImSearch} from "react-icons/im";

export const SidebarContainer = styled.div`
  border: 1px solid black;
  height: 100vh;
  min-width: 230px;
  color: white;
  flex: 0.2;
  padding-left: 10px;
  padding-right: 10px;
  background-color: black;
  overflow-y: overlay;
`;

export const InfoText = styled.p`
  cursor: context-menu;
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 0px;
  font-weight: 400;
  text-decoration: none;
  padding-left: 10px;
`;

export const SeparatorNavbar = styled.div`
  background: #fff;
  margin-top: 20px;
  width: 100%;
  height: 5px;
`;

export const IconProfile = styled(ImProfile)`
  color: #fff;
  font-size: 1.6rem;
`;

export const IconSearch = styled(ImSearch)`
color: #fff;
font-size: 1.6rem;
`;

export const IconHeart = styled(ImHeart)`
color: #fff;
font-size: 1.6rem;
`;

export const IconWrapper = styled.div`
  margin-top: 23px;
  margin-left: 50px;
`;

export const IconText = styled.a`
  color: #fff;
  font-weight: 500;
  display: inline;
  margin-left: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: #15cdfc;
  }
`;
