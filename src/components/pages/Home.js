import React from "react";
import {FcIdea, FcPanorama, FcMusic} from "react-icons/fc";
import {GiSpy} from "react-icons/gi";

const Home = () => {
  return (
    <div>
      <div className="home_page_image_container">
        <div className="home_image_gradient"></div>
        <h1 className="about_page_paragraph home_title">Music App</h1>
        <h2 className="about_page_paragraph home_slogan">
          The "newest hit" between music streaming apps.
        </h2>
      </div>
      <div className="app_info_container">
        <div className="info_card">
          <FcIdea className="card_image" />
          <div>
            <p className="card_title_text">Innovative</p>
          </div>
          <div>
            <p className="card_description_text">
              The app uses the latest frameworks (ReactJs, Spring Boot) using
              the SOLID principles to make it extensible
            </p>
          </div>
        </div>
        <div className="info_card">
          <FcPanorama className="card_image" />
          <div>
            <p className="card_title_text">Awesome Design</p>
          </div>
          <div>
            <p className="card_description_text">
              The design is simple and intuitive, so it is easy to use by
              everyone! The design is responsive so you can stream music on any
              device, where and whenever you want.
            </p>
          </div>
        </div>
        <div className="info_card">
          <FcMusic className="card_image" />
          <div>
            <p className="card_title_text">Share your music!</p>
          </div>
          <div>
            <p className="card_description_text">
              You can boost your musical career, or you can share your music
              with a new fan base, in the confort of your own house.
            </p>
          </div>
        </div>
        <div className="info_card">
          <GiSpy className="card_image" />
          <div>
            <p className="card_title_text">Secure</p>
          </div>
          <div>
            <p className="card_description_text">
              All your sensitive data is encrypted thanks to Spring Security,
              and kept far away from preying eyes on our sserver side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
