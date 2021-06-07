import React from "react";
import axios from "axios";
import {ImHeartBroken} from "react-icons/im";
import {url} from "../../../Constants";
import "./InfoCard.css";

const InfoCard = ({info}) => {
  const {songName, artists, photoId} = info;

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
        <h4>{songName}</h4>
        <p>{artists}</p>
      </div>
      <div className="unlike_container">
        <ImHeartBroken className="unlike" onClick={handleClick} />
      </div>
    </div>
  );
};

export default InfoCard;
