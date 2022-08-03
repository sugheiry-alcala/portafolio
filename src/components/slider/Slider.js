import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import Slides from "./Slides";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>My Projects</h2>
      </div>

      <Carousel
        plugins={['centered', 'arrows', 'infinite']}
        slides={Slides}
        slidesPerPage={3}
        animationSpeed={200}
        // center
        // offset={40}
        // itemWidth={250}

        breakpoints={{
          960: {
            slidesPerPage: 1,
            arrows: false,
            // itemWidth: 190,
          },
        }}
      />
    </div>
  );
};

export default Slider;
