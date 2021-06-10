import React, {useContext} from "react";
import ProfilePicture from "../profile-picture/ProfilePicture";
import {UserContext} from "../../../context/UserContext";
import {useHistory} from "react-router-dom";
import {
  InfoText,
  SeparatorNavbar,
  SidebarContainer,
  IconProfile,
  IconSearch,
  IconHeart,
  IconWrapper,
  IconText,
} from "./SidebarElements";

const Sidebar = () => {
  const history = useHistory();
  const {user, setUser} = useContext(UserContext);

  const handleClick = () => {
    history.push("/liked-songs");
  };

  const handleMusic = () => {
    history.push("/music");
  };

  const handleMyProfile = () => {
    history.push("/my-profile");
  };

  return (
    <SidebarContainer>
      <ProfilePicture />
      <InfoText>
        {user.data.firstName} {user.data.lastName}
      </InfoText>
      <InfoText>
        Roles: {user.data.roles.map((role) => `${role.name}  `)}
      </InfoText>
      <SeparatorNavbar />
      <IconWrapper>
        <IconProfile></IconProfile>
        <IconText onClick={handleMyProfile}>MyProfile</IconText>
      </IconWrapper>
      <IconWrapper>
        <IconSearch></IconSearch>
        <IconText onClick={handleMusic}>Music</IconText>
      </IconWrapper>
      <IconWrapper>
        <IconHeart></IconHeart>
        <IconText onClick={handleClick}>Liked Songs</IconText>
      </IconWrapper>
      <InfoText>My Playlists</InfoText>
    </SidebarContainer>
  );
};

export default Sidebar;
