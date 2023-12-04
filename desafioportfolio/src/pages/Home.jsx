import React from "react";
import SidebarSection from "../components/SidebarSection.jsx";
import Footer from "../components/Footer.jsx";
import Navbar from "../components/Navbar.jsx";
import PortfolioButton from "../components/PortfolioButton.jsx";
import PortfolioSection from "../components/PortfolioSection.jsx";
import TechStack from "../components/TechStack.jsx";

const Home = () => {
  return (
    <div>
      <Navbar />
      <SidebarSection />
      <PortfolioButton />
      <PortfolioSection />
      <TechStack />
      <Footer />
    </div>
  );
};

export default Home;
