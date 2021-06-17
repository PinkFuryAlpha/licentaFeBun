import React from "react";
import DefaultPicture from "./default_profile.jpg";
import {url} from "../../../../Constants";
import {PictureWrapper, ProfilePictureContainer} from "./ProfilePictureElement";

const ProfilePicture = ({pictureId}) => {
  return (
    <ProfilePictureContainer>
      <PictureWrapper>
        <img
          src={`${url}/media/getPhoto?photoId=${pictureId}`}
          alt="Profile Picture"
        />
      </PictureWrapper>
    </ProfilePictureContainer>
  );
};

export default ProfilePicture;
// `${url}/media/getPhoto?photoId=${photoId}`
