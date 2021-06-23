import React, {useState} from "react";
import {AiFillCaretLeft, AiFillCaretRight} from "react-icons/ai";
import "./PresentationPages.css";
import BasicUser from "../images/basic-user.jpg";
import Artist from "../images/artist.jpg";
import Admin from "../images/admin.jpg";
import ServiceCard from "./ServiceCard";

const SliderImages = [
  {
    image: BasicUser,
    name:"Basic User",
    description: [
      "can listen to music",
      "can like songs",
      "can create personalized playlists",
    ],
  },
  {
    image: Artist,
    name:"Artist",
    description: [
      "can post songs for other users to hear",
    ],
  },
  {
    image: Admin,
    name:"Admin",
    description: [
      "can manage users",
      "can delete certain songs",
      "can disable users",
    ],
  },
];

const ServicesDescription = () => {
  const [current, setCurrent] = useState(0);
  const length = SliderImages.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  return (
    <div>
      <div className="services_container">
        <h1 className=" home_title">Services</h1>
        <div className="slides_container">
          <AiFillCaretLeft className="arrow" onClick={prevSlide} />
          {SliderImages.map((slide, index) => {
            return (
              <div
                className={index === current ? "slide active" : "slide"}
                key={index}
              >
                {index === current && <ServiceCard info={slide} />}
              </div>
            );
          })}
          <AiFillCaretRight className="arrow" onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default ServicesDescription;
