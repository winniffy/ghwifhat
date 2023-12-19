import React from "react";
import "./Footer.css";

const Footer = ({ logo }) => {
  return (
    <footer className="footer">
      <img src={logo} alt="logo" className="footer_logo" />
      <p className="footer_text">
        Copyright &copy; 2023 $$GhostWifHat - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
