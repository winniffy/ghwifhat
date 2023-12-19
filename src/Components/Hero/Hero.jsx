import React from "react";
import "./Hero.css";

const Hero = ({ heroImage, heroImage2 }) => {
  return (
    <header className="hero_container">
      <div className="hero_left">
        <h1 className="hero_header">ghostwifhat on solana</h1>
        <p className="hero_subtext">
          <u>$GhostWifHat</u> is a community driven token inspired by Phantom.
        </p>
        <div className="hero_buttons-flex">
          <button className="hero_btn">Chart</button>
          <button className="hero_btn">Buy</button>
        </div>
      </div>

      {/* hero right */}
      <div className="hero_right">
        <img src={heroImage} alt="" className="hero_img hero_img1" />
        <img src={heroImage2} alt="" className="hero_img hero_img2" />
      </div>
    </header>
  );
};

export default Hero;
