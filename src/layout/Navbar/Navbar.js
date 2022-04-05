import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="Navbar">
      <span className="nav-logo">Eisenhower Matrix 2x2 Matrix</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <a href="/home">Home</a>
        <a href="/about">About</a>
        <a href="/service">Service</a>
        <a href="/contact">Contact</a>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
      </div>
    </nav>
  );
};

export default Navbar;
