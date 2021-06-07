import React, {useState, useContext, useEffect} from "react";
import {ToastContainer, toast} from "react-toastify";
import ImageHeader from "./likedSongs.jpg";
import {url} from "../../../Constants";
import {SongContext} from "../../context/SongContext";
import {UserContext} from "../../context/UserContext";
import axios from "axios";
import "./LikedSongs.css";
import {AiFillPlayCircle, AiFillPauseCircle} from "react-icons/ai";
import InfoCard from "../card/InfoCard";

const pagination = {
  pageNumber: 0,
  pageSize: 5,
  sortBy: "songName",
  sortDirection: "DESC",
};

const LikedSongs = () => {
  const {song, setSong} = useContext(SongContext);
  const {user, setUser} = useContext(UserContext);
  const [page, setPage] = useState(0);
  const [likedSongs, setLikedSongs] = useState([]);

  const authAxios = axios.create({
    baseUrl: url,
    headers: {
      Authorization: `Bearer ${user.data.jwtToken}`,
    },
  });

  useEffect(() => {
    authAxios
      .post(`${url}/songs/getUserLikedSongs`, pagination)
      .then((res) => {
        setLikedSongs(res.data.content);
      })
      .catch((error) => {
        toast.error(
          `${error.response.data.status}: ${error.response.data.message}`,
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      });
      console.log(likedSongs);
  }, []);

  const handlePlay = () => {
    let playlist = [];
    likedSongs.map((item, index) => {
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
  };

  return (
    <div className="liked_songs_container">
      <div className="title_container">
        <div className="image_wrapper">
          <img src={ImageHeader} alt="liked songs" className="image" />
        </div>
        <div>
          <h1 className="title">Here are your favourite songs!</h1>
          <h3 className="title_info">There are: 69 liked songs</h3>
        </div>
      </div>
      <div className="play_container">
        <AiFillPlayCircle className="play_stop" onClick={handlePlay} />
        <p className="text">Listen to your favourite songs!</p>
      </div>
      <div className="song_card_container">
        {likedSongs.map((likedSong,index) => (
          <InfoCard info={likedSong} />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
};

export default LikedSongs;
