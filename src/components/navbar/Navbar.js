import {useMediaQuery} from "react-responsive";
import Logo from "../logo/Logo";
import MobileNavLinks from "./MobileNavLinks";
import {Nav} from "./NavbarElements";
import NavLinks from "./NavLinks";

const Navbar = () => {
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    <Nav>
      <Logo />
      {!isMobile && <NavLinks />}
      {isMobile && <MobileNavLinks />}
    </Nav>
  );
};

export default Navbar;
