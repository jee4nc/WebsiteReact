import React from "react";
import "../../sass/AboutUs.scss";
import ContainerCardTech from "../molecules/ContainerCardTech";

function AboutUs() {
  return (
    <div className="AboutUs">
      <div className="AboutUs__title">
        <h1>Trabajamos con las mejores tecnologias!</h1>
      </div>
      <div className="AboutUs__text">
        <p>
          NJ Solutions te ofrece una solución a medida, trabajamos solo con
          tecnologias modernas, para mantenernos a la vanguardia y ofrecer la
          mejor de las opciones aprovechando las bondades de las innovaciones en
          el mundo de la programacion. NJ Solutions te ofrece una solución a
          medida, trabajamos solo con tecnologias modernas, para mantenernos a
          la vanguardia y ofrecer la mejor de las opciones aprovechando las
          bondades de las innovaciones en el mundo de la programacion.
        </p>
      </div>

      <div className="AboutUs__tecnologias">
        <ContainerCardTech />
      </div>
    </div>
  );
}

export default AboutUs;
