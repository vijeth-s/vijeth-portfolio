// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer>
      Designed & built by <span>Vijeth</span> · {currentYear}
    </footer>
  );
};

export default Footer;
