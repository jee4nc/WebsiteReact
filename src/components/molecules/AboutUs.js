import React from "react";
import "../../sass/AboutUs.scss";
function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="AboutUs__phrases">
        <div className="About_US__phrases__Main_phrase">
          <h2>Programamos La Oportunidad Que Tu Negocio Necesita</h2>
        </div>
        <br />
        <div className="About_Us__phrases__Text">
          <p>
            NJ Solutions es un emprendimiento que nace de la necesidad de
            ofrecer servicios informaticos de calidad a un precio acequible,
            nuestra misión es satisfacer las necesidades que nuestros clientes
            solicitan ofreciendo la mejor alternativa para cada caso en
            particular, nos caracterizamos por realizar nuestro trabajo de
            manera 100% personalizada y adaptada para cada cliente
          </p>
        </div>
      </div>
      <div className="About_Us__image">
        <img
          id="About_Us__image__png"
          src={require("../../utils/logo.png")}
          alt=""
        />
      </div>
    </div>
  );
}
export default AboutUs;
