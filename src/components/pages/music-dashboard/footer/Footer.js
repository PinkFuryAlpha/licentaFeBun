import React, {useState, useRef, useEffect, useContext} from "react";
import {ToastContainer, toast} from "react-toastify";
import axios from "axios";
import {FooterContainer} from "./FooterElements";
import {SongContext} from "../../../context/SongContext";
import {UserContext} from "../../../context/UserContext";
import {
  AiOutlinePlayCircle,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlinePauseCircle,
} from "react-icons/ai";
import {BsFillSkipBackwardFill, BsSkipForwardFill} from "react-icons/bs";
import {ImShuffle} from "react-icons/im";
import {RiRepeatLine} from "react-icons/ri";
import {BiAlbum} from "react-icons/bi";
import {BsFillVolumeUpFill, BsFillVolumeMuteFill} from "react-icons/bs";
import {Slider} from "@material-ui/core";
import {url} from "../../../../Constants";
import "./Footer.css";

const Footer = () => {
  const {user, setUser} = useContext(UserContext);
  const {song, setSong} = useContext(SongContext);

  const authAxios = axios.create({
    baseUrl: url,
    headers: {
      Authorization: `Bearer ${user.data.jwtToken}`,
    },
  });

  const [like, setLike] = useState(false);
  const [repeatSong, setRepeatSong] = useState(false);
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);

  const {songId, title, artist, image, audioSrc} = song[trackIndex];

  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);
  const {duration} = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";

  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
`;

  const handleVolume = (value) => {
    setVolume(value);
    audioRef.current.volume = value;
  };

  const handleMute = () => {
    setVolume(0);
    audioRef.current.volume = 0;
  };

  const handleMaxVolume = () => {
    setVolume(1);
    audioRef.current.volume = 1;
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(song.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < song.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onDrag = (value) => {
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onDragEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const onClickPausePlay = (value) => {
    setIsPlaying(value);
  };

  const handleLike = (value) => {
    authAxios
      .post(`${url}/songs/like`, null, {params: {songId: value}})
      .then(() => {
        setLike(true);
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

  const handleUnlike = (value) => {
    authAxios
      .post(`${url}/songs/unLike`, null, {params: {songId: value}})
      .then((res) => {
        setLike(false);
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

  function shuffle(array) {
    var currentIndex = array.length,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const handleShuffle = () => {
    const shuffledPlaylist = [...song];
    shuffle(shuffledPlaylist);
    setSong(shuffledPlaylist);
  };

  const onRepeatHandle = () => {
    setRepeatSong(!repeatSong);
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }

    audioRef.current.volume = volume;
  }, [trackIndex, song]);

  useEffect(() => {
    authAxios
      .get(`${url}/songs/isSongLikedByUser`, {params: {songId: songId}})
      .then((res) => {
        if (res.data === true) {
          setLike(true);
        } else {
          setLike(false);
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
  }, [songId]);

  return (
    <FooterContainer>
      {song && (
        <div className="elements">
          <div className="left">
            <img src={image} className="song_photo" />
            <div className="song_info">
              <h4 className="text_style">{title}</h4>
              <p className="text_style">{artist}</p>
            </div>
            {like ? (
              <AiFillHeart
                className="like_icon"
                onClick={() => handleUnlike(songId)}
              />
            ) : (
              <AiOutlineHeart
                className="like_icon"
                onClick={() => handleLike(songId)}
              />
            )}
          </div>
          <div className="center">
            <div className="song_controls">
              <ImShuffle
                size={"20px"}
                className="control_buttons"
                onClick={handleShuffle}
              />
              <BsFillSkipBackwardFill
                size={"20px"}
                className="control_buttons"
                onClick={toPrevTrack}
              />
              {isPlaying ? (
                <AiOutlinePauseCircle
                  size={"30px"}
                  className="control_buttons"
                  onClick={() => onClickPausePlay(false)}
                />
              ) : (
                <AiOutlinePlayCircle
                  size={"30px"}
                  className="control_buttons"
                  onClick={() => onClickPausePlay(true)}
                />
              )}
              <BsSkipForwardFill
                size={"20px"}
                className="control_buttons"
                onClick={toNextTrack}
              />
              {repeatSong ? (
                <RiRepeatLine
                  size={"20px"}
                  className="control_buttons"
                  onClick={onRepeatHandle}
                />
              ) : (
                <RiRepeatLine
                  size={"20px"}
                  className="control_buttons_active"
                  onClick={onRepeatHandle}
                />
              )}
            </div>
            <input
              type="range"
              value={trackProgress}
              step="1"
              min="0"
              max={duration ? duration : `${duration}`}
              onChange={(e) => onDrag(e.target.value)}
              onMouseUp={onDragEnd}
              onKeyUp={onDragEnd}
              style={{background: trackStyling}}
            />
          </div>

          <div className="right">
            <BiAlbum size={"20px"} className="control_buttons" />
            <BsFillVolumeMuteFill
              size={"25px"}
              className="control_buttons"
              onClick={handleMute}
            />
            <input
              type="range"
              value={Math.round(volume * 100)}
              className="volumeBar"
              onChange={(e) => handleVolume(e.target.value / 100)}
            />
            <BsFillVolumeUpFill
              size={"25px"}
              className="control_buttons"
              onClick={handleMaxVolume}
            />
          </div>
        </div>
      )}
      <ToastContainer />
    </FooterContainer>
  );
};

export default Footer;
