import React, {useContext, useEffect, useState} from "react";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import {IoIosCreate} from "react-icons/io";
import {url} from "../../../Constants";
import {UserContext} from "../../context/UserContext";
import "./MyPlaylists.css";
import PlaylistCard from "./playlist-card/PlaylistCard";
import CreateAlbumModal from "./create-album-modal/CreateAlbumModal";
import ConfirmModal from "./create-album-modal/ConfirmModal";
import PlaylistModal from "./create-album-modal/PlaylistModal";
import {SearchInput, SearchBarWrapper} from "../search-page/SearchPageElements";

const deletePlaylistText =
  "Are you sure you want to delete the playlist? The action is ireversible.";

const MyPlaylists = () => {
  const [songList, setSongList] = useState([]);
  const {user, setUser} = useContext(UserContext);
  const [playlists, setPlaylists] = useState([]);
  const [albumName, setAlbumName] = useState("");
  const [newAlbumModal, isNewAlbumModalOpen] = useState(false);
  const [deletePlaylistModal, isDeletePlaylistModalOpen] = useState(false);
  const [playlistModal, isPlaylistModalOpen] = useState(false);
  const [playlistId, setPlaylistId] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const authAxios = axios.create({
    baseUrl: url,
    headers: {
      Authorization: `Bearer ${user.data.jwtToken}`,
    },
  });

  const handleChange = (value) => {
    setSearchTerm(value);
  };

  const handleModalAlbum = (id) => {
    authAxios
      .get(`${url}/playlist`, {params: {playlistId: id}})
      .then((res) => {
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
        setSongList(playlist);
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

  const handleDeletePlaylist = (id) => {
    authAxios
      .delete(`${url}/playlist`, {
        params: {playlistId: id},
      })
      .then((res) => {
        const newPlaylist = [...playlists];
        for (let i = 0; i < newPlaylist.length; i++) {
          if (newPlaylist[i].id === id) {
            newPlaylist.splice(i, 1);
            setPlaylists(newPlaylist);
            break;
          }
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

  useEffect(() => {
    authAxios
      .get(`${url}/playlist/getUserPlaylists`)
      .then((res) => {
        setPlaylists(res.data);
      })
      .catch((error) => {
        toast.error(
          `${error.response.data.status}: ${error.response.data.message}`,
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      });
  }, []);

  return (
    <div className="liked_songs_container my_playlist_container">
      <div>
        <h1 className="title">You can create your own playlists!</h1>
        <div>
          <input
            name="search"
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => handleChange(e.target.value)}
            className="input_search"
          />
        </div>
      </div>
      <div className="play_container my_playlist_title_container">
        <IoIosCreate
          className="play_stop"
          onClick={() => isNewAlbumModalOpen(true)}
        />
        <h2 className="text">Click the icon in order to create a new album</h2>
      </div>
      <div>
        {playlists
          .filter((playlist) => {
            if (searchTerm === "") {
              return playlist;
            } else if (
              playlist.albumName.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return playlist;
            }
          })
          .map((playlist, index) => (
            <PlaylistCard
              playlistName={playlist.albumName}
              playlistId={playlist.id}
              index={index}
              handleDelete={() => isDeletePlaylistModalOpen(true)}
              setPlaylistId={() => {
                setPlaylistId(playlist.id);
              }}
              handleOpen={() => {
                isPlaylistModalOpen(true);
                setAlbumName(playlist.albumName);
              }}
              handleModalInfo={() => handleModalAlbum(playlist.id)}
              authAxios={authAxios}
            />
          ))}
      </div>
      <CreateAlbumModal
        isModalOpen={newAlbumModal}
        closeModal={isNewAlbumModalOpen}
        setPlaylists={setPlaylists}
        authAxios={authAxios}
      />
      <ConfirmModal
        isOpen={deletePlaylistModal}
        closeModal={isDeletePlaylistModalOpen}
        handleFunction={() => handleDeletePlaylist(playlistId)}
        modalQuestion={deletePlaylistText}
      />
      {songList && (
        <PlaylistModal
          authAxios={authAxios}
          isModalOpen={playlistModal}
          closeModal={isPlaylistModalOpen}
          albumName={albumName}
          albumSongs={songList}
          albumId={playlistId}
          authAxios={authAxios}
          setSongList={setSongList}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default MyPlaylists;
