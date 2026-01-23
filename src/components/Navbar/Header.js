import React, { useState } from "react";
import { AiOutlineFundProjectionScreen, AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiMessageSquareDetail } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import './Header.css';

const Header = () => {
  const [activeItem, setActiveItem] = useState("#");
  return (
    <nav>
      <a
        href="#Home"
        onClick={() => setActiveItem("#home")}
        className={activeItem === "#home" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
   
      <a
        onClick={() => setActiveItem("#Skills")}
        className={activeItem === "#Skills" ? "active" : ""}
        href="#Skills"
      >
       <span > <BsTools /></span>
      </a>
      <a
        onClick={() => setActiveItem("#protfolio")}
        className={activeItem === "#protfolio" ? "active" : ""}
        href="#protfolio"
      >
      <span className="">  <AiOutlineFundProjectionScreen /></span>
      </a>
      <a
        onClick={() => setActiveItem("#about")}
        className={activeItem === "#about" ? "active" : ""}
        href="#about"
      >
        <AiOutlineUser />
      </a>
   
      <a
        onClick={() => setActiveItem("#contact")}
        className={activeItem === "#contact" ? "active" : ""}
        href="#contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Header;
