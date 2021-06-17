import React, {useContext, useEffect, useState, useRef} from "react";
import {ToastContainer, toast} from "react-toastify";
import {FaPlay} from "react-icons/fa";
import Modal from "react-modal";
import axios from "axios";
import {url} from "../../../../Constants";
import {
  AlbumPhotoWrapper,
  PlaySong,
  SongContainer,
  SongId,
  SongName,
  SongNameContainer,
  SongOptions,
  SongsWrapper,
  SongText,
} from "./SongsElements";
import {SongContext} from "../../../context/SongContext";

const Songs = ({pagination, authToken, setPages, searchTerm}) => {
  const {song, setSong} = useContext(SongContext);

  const [_songs, _setSongs] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const authAxios = axios.create({
    baseUrl: url,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  });

  useEffect(() => {
    authAxios
      .post(`${url}/songs/getAllSongs`, pagination)
      .then((response) => {
        _setSongs(response.data.content);
        setPages(response.data.totalPages);
      })
      .catch((error) => {
        toast.error(
          `${error.response.data.status}: ${error.response.data.message}`,
          {
            position: toast.POSITION.BOTTOM_LEFT,
          }
        );
      });
  }, [pagination]);

  const handlePlay = (value) => {
    authAxios
      .get(`${url}/songs/get-song`, {params: {songId: value}})
      .then((res) => {
        const track = [
          {
            songId: `${value}`,
            title: `${res.data.songName}`,
            artist: `${res.data.artists[0]}`,
            audioSrc: `${url}/media/getSong?songId=${res.data.id}`,
            image: `${url}/media/getPhoto?photoId=${res.data.photoId}`,
          },
        ];
        setSong(track);
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
    <SongsWrapper>
      {_songs
        .filter((song) => {
          if (searchTerm === "") {
            return song;
          } else if (
            song.songName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            song.genre.toLowerCase().includes(searchTerm.toLowerCase()) 
          ) {
            return song;
          }
        })
        .map((song, index) => (
          <SongContainer>
            <SongNameContainer>
              <SongId>{index + 1}</SongId>
              <PlaySong>
                <FaPlay onClick={() => handlePlay(song.id)} />
              </PlaySong>
              <AlbumPhotoWrapper>
                <img src={`${url}/media/getPhoto?photoId=${song.photoId}`} />
              </AlbumPhotoWrapper>
              <SongName>{song.songName}</SongName>
            </SongNameContainer>
            <SongText>{song.artists.map((artist, index) => artist)}</SongText>
            <SongText>{song.genre}</SongText>
            <SongText>{song.views}</SongText>
            <SongText>{song.upVotes}</SongText>
            <SongOptions
              onClick={() => {
                setModalIsOpen(true);
              }}
            />
          </SongContainer>
        ))}
      <ToastContainer />
    </SongsWrapper>
  );
};

export default Songs;
