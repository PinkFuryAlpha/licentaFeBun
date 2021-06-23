import {useMediaQuery} from "react-responsive";
import Logo from "../logo/Logo";
import MobileNavLinks from "./MobileNavLinks";
import {Nav} from "./NavbarElements";
import NavLinks from "./NavLinks";
import {NavLink as Link} from "react-router-dom";

const Navbar = () => {
  const isMobile = useMediaQuery({maxWidth: 768});

  return (
    <Nav>
      <Logo>
        <Link to="/home" />
      </Logo>

      {!isMobile && <NavLinks />}
      {isMobile && <MobileNavLinks />}
    </Nav>
  );
};

export default Navbar;
