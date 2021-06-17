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
  IconAlbum,
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

  const handlePlaylist = () => {
    history.push("/my-playlists")
  }

  return (
    <SidebarContainer>
      <ProfilePicture pictureId={user.data.photoId} />
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
      <IconWrapper>
        <IconAlbum></IconAlbum>
        <IconText onClick={handlePlaylist}>My Playlists</IconText>
      </IconWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
