import React from "react";
import "./PresentationPages.css";

const ServiceCard = ({info}) => {
  return (
    <div className="slide_info">
      <div className="image_corner_left">
        <img src={info.image} className="image_fill" />
      </div>
      <div>
        <h2>{info.name}</h2>
        <ul className="list_style_card">
          {info.description.map((line, index) => (
            <li>{line}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
