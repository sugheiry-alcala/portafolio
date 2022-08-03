import React from 'react';
import "./About.css";

const miFoto ="./assets/img/miFoto.jpg"
const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me tell you something about me</h3>
        <p>I'm a Frontend Developer, I trained at Platzi in the Web Development school, and JavaScript. I have experience doing personal projects. I am passionate about learning and always being updated to improve both my technical skills and my soft skills. I also like to teach and work in a team sharing the knowledge acquired. I want to be part of a startup or company that allows me to help me with my technological knowledge and that they give me the opportunity to enhance my professional growth.
        </p>
      </div>
      <div className="about-img">
        <img  src={miFoto} alt='Mi-foto' />
      </div>
    </div>
  );
};

export default About