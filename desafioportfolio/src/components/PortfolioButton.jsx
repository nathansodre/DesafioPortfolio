import React from "react";
import { FaArrowDown } from "react-icons/fa";
import "../App.css";

const PortfolioButton = () => {
  const handleScrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio-section");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="portfolio-button">
        <button onClick={handleScrollToPortfolio}>
          Portfólio <FaArrowDown />
        </button>
      </div>
      <div className="portifolio-title">
        <h2>Explore os projetos:</h2>
      </div>
    </div>
  );
};

export default PortfolioButton;
