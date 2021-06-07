import React from "react";
import ReactPaginate from "react-paginate";
import "./PagesComponent.css";

const PagesComponent = ({pages, pageChange}) => {
  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      pageCount={pages}
      pageRangeDisplayed={"3"}
      onPageChange={pageChange}
      containerClassName={"container"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"disabled"}
      activeClassName={"paginationActive"}
    />
  );
};

export default PagesComponent;
