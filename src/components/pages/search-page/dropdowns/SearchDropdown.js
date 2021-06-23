import React, {useState} from "react";
import "./SearchDropdown.css";

const SearchDropdown = ({setPagination, setSearchDropdown}) => {
  const [filter, setFilter] = useState({
    pageNumber: 0,
    pageSize: 5,
    sortBy: "songName",
    sortDirection: "DESC",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchDropdown(false);
    setPagination(filter);
  };

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  return (
    <div className="dropwdown_container">
      <div>
        <p>Songs displayed per page:</p>
        <select name="pageSize" onChange={(e) => handleChange(e)}>
          <option selected="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="40">40</option>
          <option value="80">80</option>
          <option value="100">100</option>
        </select>
      </div>
      <div>
        <p>Sort by field:</p>
        <select name="sortBy" onChange={(e) => handleChange(e)}>
          <option selected="songName">Song Name</option>
          <option value="1">Artists</option>
          <option value="genre">Genre</option>
          <option value="views">Views</option>
          <option value="upVotes">Likes</option>
        </select>
      </div>
      <div>
        <p>Sort:</p>
        <select name="sortDirection" onChange={(e) => handleChange(e)}>
          <option selected="DESC">DESC</option>
          <option value="ASC">ASC</option>
        </select>
      </div>
      <button
        className="submit_button button_filter"
        type="submit"
        onClick={handleSubmit}
      >
        Filter
      </button>
    </div>
  );
};

export default SearchDropdown;
