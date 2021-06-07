import React from 'react';
import DefaultPicture from "./default_profile.jpg";
import { PictureWrapper, ProfilePictureContainer } from './ProfilePictureElement'

const ProfilePicture = () => {
    return (
        <ProfilePictureContainer>
            <PictureWrapper>
                <img src={DefaultPicture} alt= "Profile Picture"/>
            </PictureWrapper>
        </ProfilePictureContainer>
    )
}

export default ProfilePicture
