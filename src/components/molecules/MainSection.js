import React from "react";
import "./../../sass/MainSection.scss";
import Zoom from "react-reveal/Zoom";
function MainSection() {
  return (
    <section className="hero">
      <header className="hero-header">
        <Zoom>
          <h1 className="hero__title">Diseñamos tu pagina web a medida.</h1>
        </Zoom>
      </header>
    </section>
  );
}
export default MainSection;
