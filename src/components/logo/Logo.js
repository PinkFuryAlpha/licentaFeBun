import React from "react";
import {LogoText, LogoWrapper, LogoImg} from "./LogoElements";
import WebAppLogo from "./vinyl.png";
import {useHistory} from "react-router-dom";

const Logo = (props) => {
  const history = useHistory();

  const handleHome = () => {
    history.push("/");
  };

  return (
    <LogoWrapper >
      <LogoImg>
        <img onClick={handleHome} src={WebAppLogo} alt="Music-Logo" />
      </LogoImg>
      <LogoText >Music App</LogoText>
    </LogoWrapper>
  );
};

export default Logo;
