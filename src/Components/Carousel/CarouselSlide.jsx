import React from "react";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./CarouselSlide.css";

const CarouselSlide = ({ heroImage2, meme1, meme2, meme3, meme4 }) => {
  const centerSlidePercentage = window.innerWidth <= 500 ? 100 : 33.3;
  return (
    <motion.section className="carousel_section">
      <h4 className="carousel_header">WE'RE ALL GHOSTS WIF HAT</h4>

      {/* testimonial carousel */}
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={centerSlidePercentage}
      >
        {/* <div className="carousel_box">
          <img src={heroImage2} alt="" />
        </div> */}
        <div className="carousel_box">
          <img src={meme1} alt="" />
        </div>
        <div className="carousel_box">
          <img src={meme2} alt="" />
        </div>
        <div className="carousel_box">
          <img src={meme3} alt="" />
        </div>
        <div className="carousel_box">
          <img src={meme4} alt="" />
        </div>
      </Carousel>
      {/* carousel slide 1 */}
    </motion.section>
  );
};

export default CarouselSlide;