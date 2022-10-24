import React from "react";
import Image1 from "../images/1.png";
import Image2 from "../images/2.png";
import "../styles/components/work.scss";

const Work = () => {
  return (
    <div className="work">
      <div className="work-container">
        <div className="work-grid-container">
          <div className="work-grid-image1">
            <img src={Image1} alt="first project" />
          </div>
          <div className="work-grid-image2">
            <img src={Image2} alt="second-project" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
