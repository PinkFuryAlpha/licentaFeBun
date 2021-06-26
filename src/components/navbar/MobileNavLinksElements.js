import {AiOutlineClose} from "react-icons/ai";
import styled from "styled-components";

export const NavLinksContainer = styled.div`
  background: rgba(0, 0, 0, 0.75);
  display: block;
  width: 100vw;
  height: 100%;
  position: fixed;
  margin-top:0px;
  top: 0;
  left:0;
  z-index:500;
`;

export const LinksWrapper = styled.ul`
  box-sizing: border-box;
  background: black;
  padding: 40px;
  padding-top: 60px;
  width: 447px;
  height:100%;
  overflow-x: hidden;
  overflow-y: hidden;
  position: fixed;
  right: 0;
 
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

export const LinkItem = styled.li`
  padding-top: 10px;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5px;
  display: flex;
  margin-bottom: 50px;
  margin-top: 16px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: inherit;
  font-size: 30px;

  &:hover {
    color: #15cdfc;
  }
`;

export const SeparatorMobile = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin-top: 50px;
  width: 250px;
  height: 5px;
`;

export const BtnWrapper = styled.div`
  margin-top: 60px;
  display: inline-block;
`;
export const LogoWrapperMobile = styled.div`
  margin-top: 70%;
  display: inline-block;
`;

export const NavBtn = styled.nav`
  display: inline-block;
  align-items: center;
  margin-right: 50px;
  margin-bottom: 20px;
`;

export const Close = styled(AiOutlineClose)`
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

export const NavBtnLink = styled.a`
  border-radius: 6px;
  background: #256ce1;
  padding: 10px 22px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;

export const Marginer = styled.div`
  height: 2em;
`;

