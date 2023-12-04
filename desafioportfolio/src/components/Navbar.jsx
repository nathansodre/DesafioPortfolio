import React, { useState } from "react";
import "../App.css";
import resumePDF from "../assets/CurriculoNathanSodre.pdf";

const Navbar = () => {
  const [language, setLanguage] = useState("English");

  const toggleLanguage = () => {
    if (language === "Português") {
      window.location.href = "../../pages/HomePageEn";
    } else {
      window.location.href = "../../pages/HomePagePt";
    }
  };

  return (
    <nav className="navbar">
      <div className="left">
        <a
          href={resumePDF}
          download="NathanSodré.pdf"
          className="button-download"
        >
          Baixar Currículo
        </a>{" "}
      </div>
      <div className="right">
        <button className="button-language" onClick={toggleLanguage}>
          {language === "English" ? (
            <>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Flag_of_the_United_Kingdom_%281-2%29.svg/1200px-Flag_of_the_United_Kingdom_%281-2%29.svg.png"
                alt="English Flag"
                className="language-icon"
              />
              English
            </>
          ) : (
            <>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1024px-Flag_of_Brazil.svg.png"
                alt="Brazilian Flag"
                className="language-icon"
              />
              Português
            </>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
