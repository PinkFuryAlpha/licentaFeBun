import React, {useState} from "react";
import {Bars} from "./NavbarElements";
import {
  BtnWrapper,
  LinksWrapper,
  NavLinksContainer,
  Link,
  LinkItem,
  Marginer,
  SeparatorMobile,
  NavBtn,
  NavBtnLink,
  Close,
  LogoWrapperMobile
} from "./MobileNavLinksElements";
import Logo from "../logo/Logo";

const MobileNavLinks = () => {
  const [isOpen, setOpen] = useState(false);

  const showSidebar = () => setOpen(!isOpen);

  return (
    <>
      {!isOpen && <Bars onClick={showSidebar} />}
      {isOpen && (
        <NavLinksContainer>
          <LinksWrapper>
            <Close onClick={showSidebar}/>
            <LinkItem>
              <Link href="/about">About us</Link>
            </LinkItem>
            <LinkItem>
              <Link href="/services">How it works</Link>
            </LinkItem>
            <SeparatorMobile />
            <BtnWrapper>
              <NavBtn>
                <NavBtnLink to="/sign-in">Sign in</NavBtnLink>
              </NavBtn>
              <NavBtn>
                <NavBtnLink to="/sign-up">Sign up</NavBtnLink>
              </NavBtn>
            </BtnWrapper>
            <LogoWrapperMobile>
                <Logo/>
            </LogoWrapperMobile>
            <Marginer/>
          </LinksWrapper>
        </NavLinksContainer>
      )}
    </>
  );
};

export default MobileNavLinks;
