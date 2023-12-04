import React from "react";
import "../App.css";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import resumePDF from "../assets/CurriculoNathanSodre.pdf";

const Footer = () => {
  return (
    <footer className="footer">
      <hr className="footer-divider" />
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contato</h3>
          <p>
            <a href="https://api.whatsapp.com/send?phone=5551998620081&text=Oi%20Nathan%20Sodr%C3%A9!%20vi%20seu%20portf%C3%B3lio,%20podemos%20conversar?">
              (51) 998620081
            </a>
          </p>
          <p>
            <a href="mailto:nathanssodre@gmail.com">
              Email: nathanssodre@gmail.com
            </a>
          </p>
        </div>
        <div className="footer-social">
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin">
              <FaLinkedin />
            </i>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github">
              <FaGithub />
            </i>
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook">
              <FaFacebook />
            </i>
          </a>
        </div>
        <div className="left">
          <a
            href={resumePDF}
            download="seu-curriculo.pdf"
            className="button-download"
          >
            Baixar Currículo
          </a>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
