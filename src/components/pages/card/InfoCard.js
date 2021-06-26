import React from "react";
import axios from "axios";
import {ImHeartBroken} from "react-icons/im";
import {url} from "../../../Constants";
import "./InfoCard.css";

const InfoCard = ({info, removeSong, isArtist}) => {
  const {id, songName, artists, photoId, views, upVotes} = info;

  const handleClick = () => {
    console.log(info);
  };

  return (
    <div className="card_container">
      <div className="photo_wrapper">
        <img
          src={`${url}/media/getPhoto?photoId=${photoId}`}
          className="song_image"
        />
      </div>
      <div className="info_container">
        <h4 className="override_p">{songName}</h4>
        <p className="override_p">{artists}</p>
      </div>
      {isArtist && (
        <div className="stats">
          <p className="override_p">Views: {Math.ceil(views/3)}</p>
          <p className="override_p">Likes: {upVotes}</p>
        </div>
      )}
      <div className="unlike_container">
        <ImHeartBroken className="unlike" onClick={() => removeSong(id)} />
      </div>
    </div>
  );
};

export default InfoCard;
