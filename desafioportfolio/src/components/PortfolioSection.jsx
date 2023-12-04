import React from "react";
import "../App.css";

const PortfolioSection = () => {
  return (
    <section id="portfolio-section" className="portfolio-section">
      <div className="card">
        <img
          src="https://user-images.githubusercontent.com/127889971/244545818-d7c8708e-e938-465d-b044-e58f8dc682df.png"
          alt="Klose Official Website"
        />
        <h3>Site oficial de banda de rock alternativo.</h3>
        <p className="tags">React.js, Bootstrap 5</p>
        <a href="#">Ver detalhes</a>
      </div>
      <div className="card">
        <img
          src="https://user-images.githubusercontent.com/127889971/244552287-2de0eceb-f289-4fdc-a51f-570676c5630a.png"
          alt="Imagem 2"
        />
        <h3>Site que permite contar segredos anônimamente</h3>
        <p className="tags">OAuth 2.0, Node.js, MongoDB</p>
        <a href="#">Ver detalhes</a>
      </div>
      <div className="card">
        <img
          src="https://user-images.githubusercontent.com/127889971/244549203-a02aceea-b799-447f-b2c4-0faa3c5e445e.png"
          alt="Imagem 2"
        />
        <h3>Bloco de Notas</h3>
        <p className="tags">EJS, Node.js, MongoDB</p>
        <a href="#">Ver detalhes</a>
      </div>
      <div className="card">
        <img src="../../../portfolio.png" alt="Imagem 2" />
        <h3>Meu portfólio</h3>
        <p className="tags">React.js</p>
        <a href="#">Ver detalhes</a>
      </div>
      <div className="card">
        <img
          src="https://user-images.githubusercontent.com/127889971/244553975-6abad9a4-ece1-4678-a596-5c0e659c6edb.png"
          alt="Imagem 2"
        />
        <h3>Drum Kit</h3>
        <p className="tags">Javascript, CSS3</p>
        <a href="#">Ver detalhes</a>
      </div>
      <div className="card">
        <img
          src="https://user-images.githubusercontent.com/127889971/244554545-b1fef842-af5e-46cb-8574-e67cf5a294d9.png"
          alt="Imagem 2"
        />
        <h3>Rolem os Dados!</h3>
        <p className="tags">Javascript, CSS3</p>
        <a href="#">Ver detalhes</a>
      </div>
      <div className="card">
        <img
          src="https://user-images.githubusercontent.com/127889971/244556115-823103dd-440f-42df-92c7-66e5b8c12509.png"
          alt="Imagem 2"
        />
        <h3>Newsletter</h3>
        <p className="tags">Node.js, MongoDB</p>
        <a href="#">Ver detalhes</a>
      </div>
      <div className="card">
        <img
          src="https://user-images.githubusercontent.com/127889971/244543331-b985c4de-f0f5-41d8-a151-3b6358a1836e.png"
          alt="Imagem 2"
        />
        <h3>Simpsons Site</h3>
        <p className="tags">HTML5, CSS3</p>
        <a href="#">Ver detalhes</a>
      </div>
      <div className="card">
        <img
          src="https://user-images.githubusercontent.com/127889971/245628569-8bbff67c-f8eb-489c-87a0-5ff056b3761f.png"
          alt="Imagem 2"
        />
        <h3>Disney Site</h3>
        <p className="tags">HTML5, CSS3</p>
        <a href="#">Ver detalhes</a>
      </div>
    </section>
  );
};

export default PortfolioSection;
