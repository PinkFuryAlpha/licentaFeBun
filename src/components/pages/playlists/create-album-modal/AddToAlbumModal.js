import React from "react";
import Modal from "react-modal";
import {BsFillPlusCircleFill} from "react-icons/bs";
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

const AddToAlbumModal = ({
  isModalOpen,
  closeModal,
  albumList,
  songId,
  authAxios,
}) => {
  const handleAddtoAlbum = (songId, playlistId) => {
    authAxios
      .post(`${url}/playlist/addSong`, null, {
        params: {songId: songId.songId, playlistId: playlistId},
      })
      .then((res) =>{})
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
        <h1>Your Albums: </h1>
        {albumList.map((album, index) => (
          <div className="song_card_modal">
            <p className="override_display">
              {index + 1}. {album.albumName}
            </p>
            <BsFillPlusCircleFill
              className="playlist_icon"
              onClick={() =>handleAddtoAlbum(songId, album.id)}
            />
          </div>
        ))}
      </Modal>
    </div>
  );
};

export default AddToAlbumModal;
