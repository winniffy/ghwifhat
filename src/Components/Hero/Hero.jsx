import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";

const Hero = ({ heroImage, heroImage2 }) => {
  return (
    <header className="hero_container">
      <motion.div
        className="hero_left"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="hero_header">ghostwifhat on solana</h1>
        <p className="hero_subtext">
          <u>$GIF</u> is a community driven token inspired by Phantom.
        </p>
        <div className="hero_buttons-flex">
          <a
            href="https://t.co/iubclBM3sH"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hero_btn">Chart</button>
          </a>
          <a
            href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=Cc3voFEFTrGmnhnP8x77ncZ6pivG8Kk9ir1t8AhBBaby&fixed=in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="hero_btn">Buy</button>
          </a>
        </div>
      </motion.div>

      {/* hero right */}
      <motion.div
        className="hero_right"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img src={heroImage} alt="" className="hero_img hero_img1" />
        <img src={heroImage2} alt="" className="hero_img hero_img2" />
      </motion.div>
    </header>
  );
};

export default Hero;
