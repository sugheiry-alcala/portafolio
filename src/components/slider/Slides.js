import React from "react";
import "./Slider.css";


const slidesInfo = [
  {
    src:
    "./assets/img/clongoogle.png",
    alt: "Project 1",
    desc: "Clon google",
  },
  {
    src:
      "./assets/img/clonyoutube.png",
    alt: "Project 2",
    desc: "Clon youtube",
  },
  {
    src:
      "./assets/img/twitterclone.png",
    alt: "Project 3",
    desc: "twitterclone",
  },
  {
    src:
      "./assets/img/weather-app.png",
    alt: "Project 4",
    desc: "weather-app",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;