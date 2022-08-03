import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>M. Sugheiry Alcalá R.</h1>
        <p>Medellín - Colombia</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By M.Sugheiry Alcala R.
        <p> <a href="mailto:sugheiry@gmail.com">sugheiry@gmail.com</a></p>
        </div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/sugheiry-alcala/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/Sugheiry_" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://github.com/sugheiry-alcala" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;