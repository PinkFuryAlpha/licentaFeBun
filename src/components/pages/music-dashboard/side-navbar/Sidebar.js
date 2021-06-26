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
  IconLogout
} from "./SidebarElements";
import { SongContext } from "../../../context/SongContext";

const Sidebar = () => {
  const history = useHistory();
  const {user, setUser} = useContext(UserContext);
  const {song, setSong} = useContext(SongContext);

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

  const handleLogout = () =>{
    setUser(null);
    setSong(null);
    history.push("/")
  }

  return (
    <SidebarContainer>
      <div>
      <IconWrapper>
        <IconLogout onClick={handleLogout}></IconLogout>
      </IconWrapper>
      <ProfilePicture pictureId={user.data.photoId} />
      </div>
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
      <SeparatorNavbar />
    </SidebarContainer>
  );
};

export default Sidebar;
