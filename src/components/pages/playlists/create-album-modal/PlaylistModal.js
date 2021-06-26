import React from "react";
import Modal from "react-modal";
import ModalSongCard from "../playlist-card/ModalSongCard";
import {ToastContainer, toast} from "react-toastify";
import {url} from "../../../../Constants";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },
  content: {
    background: "black",
    height: "60%",
    width: "45%",
    marginLeft: "30%",
    marginTop: "2%",
    alignItems: "center",
  },
};

const PlaylistModal = ({
  isModalOpen,
  closeModal,
  albumName,
  albumSongs,
  albumId,
  authAxios,
  setSongList,
}) => {
  const handleRemoveSong = (songId) => {
    authAxios
      .post(`${url}/playlist/removeSong`, null, {
        params: {playlistId: albumId, songId: songId},
      })
      .then((res) => {
        toast.success(`Song removed with succes!`, {
          position: toast.POSITION.BOTTOM_LEFT,
        });
        let newSongList = [...albumSongs];
        for (let i = 0; i < newSongList.length; i++) {
          if (newSongList[i].songId === songId) {
            newSongList.splice(i, 1);
            setSongList(newSongList);
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

  return (
    <div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => closeModal(false)}
        style={customStyles}
      >
        <h1>{albumName}</h1>
        <div>
          {albumSongs.map((track, index) => (
            <ModalSongCard
              trackTitle={track.title}
              trackArtists={track.artist}
              removeSong={() => handleRemoveSong(track.songId)}
            />
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default PlaylistModal;
