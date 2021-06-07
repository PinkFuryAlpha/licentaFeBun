import {FaBars} from "react-icons/fa";
import {NavLink as Link} from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.div`
  background: #000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw-1000px) / 2);
  padding-right: 20px;
  z-index: 10;
`;

export const Separator = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  width: 2px;
  height: 100%;
  cursor: context-menu;
`;

export const NavbarImage = styled.div`
  background-image: url("./app-logo.png");
  width: 50px;
  height: 50px;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(-100%, 75%);
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
`;
