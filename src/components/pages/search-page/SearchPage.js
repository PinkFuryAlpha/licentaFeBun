import React, {useState, useContext, useEffect} from "react";
import {FcSearch} from "react-icons/fc";
import {ToastContainer, toast} from "react-toastify";
import {UserContext} from "../../context/UserContext";
import {url} from "../../../Constants";
import axios from "axios";
import {
  SearchPageTitle,
  SearchBarWrapper,
  SearchInput,
  SearchButton,
} from "./SearchPageElements";
import Songs from "./songs-display/Songs";
import SongInfoColumn from "./songs-top-bar/SongInfoColumn";
import PagesComponent from "./pages-scroll/PagesComponent";

const _tableHeads = [
  "Song Name",
  "Artists",
  "Genre",
  "Views",
  "Likes",
  "Options",
];

const SearchPage = () => {
  const {user, setUser} = useContext(UserContext);

  const [searchTerm, setSearchTerm] = useState("");

  const [_pagination, setPagination] = useState({
    pageNumber: 0,
    pageSize: 5,
    sortBy: "songName",
    sortDirection: "DESC",
  });

  const [_pages, setPages] = useState(0);

  const accesToken = user.data.jwtToken;

  const authAxios = axios.create({
    baseUrl: url,
    headers: {
      Authorization: `Bearer ${accesToken}`,
    },
  });

  const handleChange = (value) => {
    setSearchTerm(value);
  };

  const changePage = ({selected}) => {
    setPagination({
      ..._pagination,
      pageNumber: selected,
    });
  };

  return (
    <div>
      <SearchPageTitle>Search for playlists, songs or artists!</SearchPageTitle>
      <SearchBarWrapper>
        <SearchInput
          name="search"
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleChange(e.target.value)}
        />
        <SearchButton>
          <FcSearch />
        </SearchButton>
      </SearchBarWrapper>
      <SongInfoColumn tableHeads={_tableHeads} />
      <Songs pagination={_pagination} authToken={accesToken} setPages={setPages} />
      <PagesComponent pages={_pages} pageChange={changePage} />
      <ToastContainer />
    </div>
  );
};

export default SearchPage;
