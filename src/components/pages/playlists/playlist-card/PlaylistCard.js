import React, {useState, useEffect, useContext} from "react";
import {ToastContainer, toast} from "react-toastify";
import "../MyPlaylists.css";
import {SongContext} from "../../../context/SongContext";
import {GrClose} from "react-icons/gr";
import {FaPlayCircle} from "react-icons/fa";
import {url} from "../../../../Constants";

const PlaylistCard = ({
  setPlaylistId,
  playlistName,
  playlistId,
  index,
  handleModalInfo,
  handleDelete,
  handleOpen,
  authAxios,
}) => {
  const {song, setSong} = useContext(SongContext);

  const handlePlayAlbum = () => {
    authAxios
      .get(`${url}/playlist`, {params: {playlistId: playlistId}})
      .then((res) => {
        if (res.data.songs.length === 0) {
          console.log(playlistId)
          toast.error(
            `The playlist should at least have one song in order to be played!`,
            {
              position: toast.POSITION.BOTTOM_CENTER,
            }
          );
        } else {
          let playlist = [];
          res.data.songs.map((item, index) => {
            const track = {
              songId: `${item.id}`,
              title: `${item.songName}`,
              artist: `${item.artists[0]}`,
              audioSrc: `${url}/media/getSong?songId=${item.id}`,
              image: `${url}/media/getPhoto?photoId=${item.photoId}`,
            };
            playlist.push(track);
          });
          setSong(playlist);
        }
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

  return (
    <div>
      <div className="playlist_container">
        <div className="playlist_info">
          <p>{index + 1}</p>
          <p>
            <FaPlayCircle className="playlist_icon" onClick={handlePlayAlbum} />
          </p>
          <p
            className="playlist_title"
            onClick={() => {
              handleOpen();
              handleModalInfo();
              setPlaylistId();
            }}
          >
            {playlistName}
          </p>
        </div>
        <div>
          <GrClose
            className="playlist_icon"
            onClick={() => {
              handleDelete();
              setPlaylistId();
            }}
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default PlaylistCard;
