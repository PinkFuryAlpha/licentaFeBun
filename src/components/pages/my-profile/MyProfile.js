import React, {useContext, useState, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import {UserContext} from "../../context/UserContext";
import {url} from "../../../Constants";
import {TiUpload} from "react-icons/ti";
import "./MyProfile.css";
import InfoCard from "../card/InfoCard";

const MyProfile = () => {
  const {user, setUser} = useContext(UserContext);

  const [isArtist, setIsArtist] = useState(false);
  const [userSongs, setUserSongs] = useState([]);

  const authAxios = axios.create({
    baseUrl: url,
    headers: {
      Authorization: `Bearer ${user.data.jwtToken}`,
    },
  });

  const removeSong = () => {
    console.log("removed");
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
        <a className="button_my_profile">Change Password</a>
      </div>
      <div className="section_container">
        <p>Click the button bellow in order to change your profile picture!</p>
        <a className="button_my_profile">
          Upload <TiUpload />
        </a>
      </div>
      {isArtist ? (
        <div className="section_container">
          <p>
            Click the button bellow in order to post a song, it might be the
            next hit!
          </p>
          <a className="button_my_profile">
            Upload <TiUpload />
          </a>
        </div>
      ) : (
        <div className="section_container">
          <p>
            Ready to take the next step and become a content creator? It's
            simple just hit the button bellow!
          </p>
          <a className="button_my_profile">Update to artist!</a>
        </div>
      )}
      {isArtist && (
        <div>
          <p className="board">Songs Board, remove unwated songs:</p>
          <div className="user_songs_container">
            {userSongs.map((song, index) => (
              <InfoCard info={song} removeSong={removeSong} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyProfile;
