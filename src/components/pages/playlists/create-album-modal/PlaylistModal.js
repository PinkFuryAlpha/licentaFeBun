import React from "react";
import Modal from "react-modal";
import ModalSongCard from "../playlist-card/ModalSongCard";

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
}) => {

  

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
            <ModalSongCard trackTitle={track.title} trackId={track.id} trackArtists={track.artist}/>
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default PlaylistModal;
