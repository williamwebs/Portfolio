import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDots } from "react-icons/bi";
// import { RiServiceLine } from "react-icons/ri";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

const Navbar = () => {
  const [active, setIsActive] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setIsActive("#")}
        className={active === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setIsActive("#about")}
        className={active === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#skills"
        onClick={() => setIsActive("#skills")}
        className={active === "#skills" ? "active" : ""}
      >
        <BiBook />
      </a>
      {/* <a
        href="#services"
        onClick={() => setIsActive("#services")}
        className={active === "#services" ? "active" : ""}
      >
        <RiServiceLine />
      </a> */}
      <a
        href="#portfolio"
        onClick={() => setIsActive("#portfolio")}
        className={active === "#portfolio" ? "active" : ""}
      >
        <HiOutlineClipboardDocumentList />
      </a>
      <a
        href="#contact"
        onClick={() => setIsActive("#contact")}
        className={active === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDots />
      </a>
    </nav>
  );
};

export default Navbar;
