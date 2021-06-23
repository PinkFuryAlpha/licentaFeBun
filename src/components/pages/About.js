import React, {useContext} from "react";
import "./PresentationPages.css";

const About = () => {
  return (
    <div className="about_container">
      <h1 className="about_page_paragraph_title">
        This website is made for my bachelor degree thesis only and it's not a
        mean of monetary gain.
      </h1>
      <h2 className="about_page_paragraph">
        No copyright intended. I do not own the music in this audio/rights to
        this music. I do not take credit for the songs.
      </h2>
      <h3 className="about_page_paragraph">Useful links:</h3>
      <p className="link_tree">
        <a href="https://github.com/PinkFuryAlpha">Git Hub Repository</a>
      </p>
      <p className="link_tree">
        <a href="https://linkedin.com/in/tinteanu-tudor-60a5b11ab">Linkedin profile</a>
      </p>
      <div className="gradient"></div>
    </div>
  );
};

export default About;
