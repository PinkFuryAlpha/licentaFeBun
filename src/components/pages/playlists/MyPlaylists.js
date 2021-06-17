import React from "react";
import {IoIosCreate} from "react-icons/io";
import "./MyPlaylists.css";

const MyPlaylists = () => {
  return (
    <div className="liked_songs_container my_playlist_container">
      <div>
        <h1 className="title">You can create your own playlists!</h1>
        <h3 className="title_info">There are: XX personal playlists!</h3>
      </div>
      <div className="play_container my_playlist_title_container">
        <IoIosCreate className="play_stop" />
        <p className="text">Listen to your favourite songs!</p>
      </div>
    </div>
  );
};

export default MyPlaylists;
