import styled from "styled-components";
import {HiDotsVertical} from "react-icons/hi";

export const SongsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

export const SongContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  height: 70px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #114357;
    background: -webkit-linear-gradient(to right, #f29492, #114357);
    background: linear-gradient(to right, #f29492, #114357);

    p:nth-child(1) {
      display: none;
    }

    p:nth-child(2) {
      display: block;
      transition: opacity 2s linear;
    }
  }
`;

export const SongNameContainer = styled.div`
  display: flex;
  justify-content: start;
  flex: 0.23;
`;

export const AlbumPhotoWrapper = styled.div`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    margin-top: 5px;
  }
`;

export const SongId = styled.p`
  color: #fff;
  cursor: context-menu;
  font-weight: 500;
  padding-top: 6px;
  margin-right: 20px;

  &:hover {
    transition: all 0.2s ease-in-out;
    display: none;
  }
`;

export const SongText = styled.p`
  color: #fff;
  cursor: context-menu;
  font-weight: 500;
  padding-top: 6px;
`;

export const SongName = styled.p`
  color: #fff;
  cursor: context-menu;
  font-weight: 500;
  padding-top: 6px;
  margin-left: 20px;
`;

export const SongOptions = styled(HiDotsVertical)`
  color: #fff;
  font-size: 1.6rem;
  padding-top: 20px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #15cdfc;
  }
`;

export const PlaySong = styled.p`
  color: #fff;
  font-size: 1.1rem;
  margin-top: 25px;
  cursor: pointer;
  display: none;
  margin-right: 15px;

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #15cdfc;
  }
`;
