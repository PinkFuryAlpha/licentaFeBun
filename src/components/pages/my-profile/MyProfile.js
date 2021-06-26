import React, {useContext, useState, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import {UserContext} from "../../context/UserContext";
import {url} from "../../../Constants";
import {TiUpload} from "react-icons/ti";
import "./MyProfile.css";
import InfoCard from "../card/InfoCard";
import UploadSongForm from "./UploadSongForm";
import ConfirmModal from "../playlists/create-album-modal/ConfirmModal";

const modalQuestion = "Are you sure you want to proceed changing your password?"

const MyProfile = () => {
  const {user, setUser} = useContext(UserContext);

  const [isArtist, setIsArtist] = useState(false);
  const [userSongs, setUserSongs] = useState([]);
  const [profileImage, setProfileImage] = useState(null);
  const [songModal, setSongModal] = useState(false);
  const [passwordModal, setPasswordModal] = useState(false);

  const authAxios = axios.create({
    baseUrl: url,
    headers: {
      Authorization: `Bearer ${user.data.jwtToken}`,
    },
  });

  const modalHandler = () => {
    setSongModal(!songModal);
  };

  const sendPasswordResetEmail = () => {
    authAxios
      .post(`${url}/users/forgot-password`, null, {
        params: {email: user.data.email},
      })
      .then((res) => {
        toast.success(`Email was sent!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((error) => {
        toast.error(
          `${error.response.data.status}: ${error.response.data.message}`,
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      });
  };

  const removeSong = (value) => {
    authAxios
      .delete(`${url}/songs/delete`, {params: {songId: value}})
      .then((res) => {
        const newUserSongs = [...userSongs];
        for (let i = 0; i < newUserSongs.length; i++) {
          if (newUserSongs[i].id === value) {
            newUserSongs.splice(i, 1);
            setUserSongs(newUserSongs);
            break;
          }
        }
        toast.success(`Song has been deleted successfully.`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((error) => {
        toast.error(
          `${error.response.data.status}: ${error.response.data.message}`,
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      });
  };

  const profilePictureHandle = (event) => {
    setProfileImage(event.target.files[0]);
  };

  const profileImageUpload = (e) => {
    e.preventDefault();
    try {
      if (!profileImage.name.match(/.(jpg|jpeg|png)$/i)) {
        toast.error(`This file doesn't have an image format!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        const formData = new FormData();
        formData.append("file", profileImage);
        const config = {
          headers: {
            "content-type": "multipart/formData",
          },
        };
        authAxios
          .post(`${url}/users/save-profile-image`, formData, config)
          .then((res) => {
            const newUser = {...user};
            setUser({
              ...newUser,
            });
            toast.success(`Profile image updated!`, {
              position: toast.POSITION.BOTTOM_LEFT,
            });
          })
          .catch((error) => {
            toast.error(
              `${error.response.data.status}: ${error.response.data.message}`,
              {
                position: toast.POSITION.BOTTOM_LEFT,
              }
            );
          });
      }
    } catch (error) {
      toast.error(`This file doesn't have an image format!`, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  };

  const updateToArtist = () => {
    authAxios
      .post(`${url}/users/update-to-artist`)
      .then((res) => {
        setIsArtist(true);
        toast.success(`Congratulations, now you have became an artist!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      })
      .catch((error) => {
        toast.error(
          `${error.response.data.status}: ${error.response.data.message}`,
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      });
  };

  useEffect(() => {
    user.data.roles.map((role) => {
      if (role.name === "ARTIST") {
        setIsArtist(true);
      }
    });
  }, []);

  useEffect(() => {
    if (isArtist) {
      authAxios
        .get(`${url}/songs/getUserSongs`, {
          params: {username: user.data.username},
        })
        .then((res) => {
          setUserSongs(res.data);
        })
        .catch((error) => {
          toast.error(
            `${error.response.data.status}: ${error.response.data.message}`,
            {
              position: toast.POSITION.BOTTOM_LEFT,
            }
          );
        });
    }
  }, [isArtist]);

  return (
    <div className="main_container">
      <div className="my_profile_title">
        <h1>Welcome to your account settings!</h1>
        <p>
          Here you can make changes to your account, select bellow what would
          you like to change:
        </p>
      </div>
      <div className="section_container">
        <p>Click the button bellow in order to change your password!</p>
        <a
          className="button_my_profile"
          onClick={() => {
            setPasswordModal(true);
          }}
        >
          Change Password
        </a>
      </div>
      <div className="section_container">
        <form onSubmit={profileImageUpload}>
          <p>
            Click the button bellow in order to change your profile picture!
          </p>
          <button className="button_my_profile" type="submit">
            Upload <TiUpload />
          </button>
          <input
            type="file"
            placeholder="Upload photo"
            onChange={profilePictureHandle}
          />
        </form>
      </div>
      {isArtist ? (
        <div className="section_container">
          <p>
            Click the button bellow in order to post a song, it might be the
            next hit!
          </p>
          <a className="button_my_profile" onClick={modalHandler}>
            Load a song
          </a>
        </div>
      ) : (
        <div className="section_container">
          <p>
            Ready to take the next step and become a content creator? It's
            simple just hit the button bellow!
          </p>
          <a
            className="button_my_profile"
            onClick={() => {
              updateToArtist();
            }}
          >
            Update to artist!
          </a>
        </div>
      )}
      {isArtist && (
        <div>
          <p className="board">Songs Board, remove unwanted songs:</p>
          <div className="user_songs_container">
            {userSongs.map((song, index) => (
              <InfoCard info={song} removeSong={removeSong} isArtist={isArtist}/>
            ))}
          </div>
        </div>
      )}
      <UploadSongForm
        isModalOpen={songModal}
        modalHandler={modalHandler}
        authAxios={authAxios}
        setUserSongs={setUserSongs}
        username={user.data.username}
      />
      <ConfirmModal
        modalQuestion={modalQuestion}
        isOpen={passwordModal}
        closeModal={setPasswordModal}
        handleFunction={sendPasswordResetEmail}
      />
      <ToastContainer />
    </div>
  );
};

export default MyProfile;
