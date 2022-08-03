import React from "react";
import "./Cover.css";

const coverVideo = "./assets/video/cover-video.mp4"
const cover = () => {
  return (
    <div className="cover-container">
      <video className="video" src={coverVideo} autoPlay loop muted />
      <h1>
        Maury Sugheiry Alcalá Romero
      </h1>
      <p>Frontend Developer |
        Augmented reality creator</p>
    </div>
  );
};

export default cover;