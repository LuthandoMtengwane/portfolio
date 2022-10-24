import React, { useEffect } from "react";
import gsap from "gsap";
import SplitType from "split-type";
import "../styles/components/header.scss";

const Header = () => {
  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    const myText = new SplitType("#title");
    // eslint-disable-next-line no-unused-vars
    const text = new SplitType("#name");

    gsap.to(".char", {
      y: 0,
      stagger: 0.03,
      delay: 0.2,
      duration: 0.08,
    });

    gsap.to(".pink-text", {
      y: 0,
      stagger: 0.1,
      delay: 1,
      duration: 0.2,
    });
    gsap.to(".pink-text2", {
      y: 0,
      stagger: 0.1,
      delay: 1,
      duration: 0.2,
    });
  });
  return (
    <div className="header">
      <div className="header__container">
        <p className="pink-text2">
          I MAKE <span className="pink-span">awesome</span> STUFF
          <br />
          HIT ME UP
        </p>
        <div className="header__title" id="title">
          HI, <span className="header__pink"> i'm </span>
        </div>{" "}
        <br />
        <div className="header__title" id="name">
          LUTHANDO*
        </div>
        <p className="pink-text">
          *ACTUALLY I'M A <span className="pink-span">website.</span> <br />
          BUT I WAS <span className="pink-span">built</span> BY LUTHANDO
          MTENGWANE.
        </p>
      </div>
    </div>
  );
};

export default Header;
