import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import MyPhoto from "../assets/NathanSodre.jpg";
import "../App.css";

const SidebarSection = () => {
  return (
    <div className="sidebar">
      <div className="social-icons">
        <a
          href="https://www.facebook.com/nathan.sodre/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/nathanss/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nathansodre"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
      </div>
      <div className="intro">
        <h1>Olá, eu sou o Nathan Sodré</h1>
        <p className="subtitle">Desenvolvedor Full-Stack</p>
        <div>
          <button className="opentowork">🟢 #OpenToWork</button>
        </div>
      </div>
      <div className="photo">
        <img src={MyPhoto} alt="Minha Foto" />
      </div>
    </div>
  );
};

export default SidebarSection;
