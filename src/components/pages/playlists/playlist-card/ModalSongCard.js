import React, {useEffect} from "react";
import {AiFillDelete} from "react-icons/ai";

const ModalSongCard = ({trackTitle, trackArtists, removeSong}) => {
  return (
    <div className="song_card_modal">
      <p>{trackTitle}</p>
      <p className="override_display">{trackArtists}</p>
      <AiFillDelete
        className="playlist_icon"
        onClick={removeSong}
      />
    </div>
  );
};

export default ModalSongCard;
