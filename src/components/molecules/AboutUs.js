import React from "react";
import "../../sass/AboutUs.scss";
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
        <div className="AboutUs__tecnologias__containerImg">
          <img
            className="AboutUs__tecnologias__containerImg"
            src={require("../../utils/angular.svg")}
            alt="angular"
          />
        </div>
        <div className="AboutUs__tecnologias__containerImg">
          <img
            className="img1"
            src={require("../../utils/django.svg")}
            alt="django"
          />
        </div>
        <div className="AboutUs__tecnologias__containerImg">
          <img className="img1" src={require("../../utils/js.svg")} alt="js" />
        </div>
        <div className="AboutUs__tecnologias__containerImg">
          <img
            className="img1"
            src={require("../../utils/mysql.svg")}
            alt="mysql"
          />
        </div>
        <div className="AboutUs__tecnologias__containerImg">
          <img
            className="img1"
            src={require("../../utils/nodejs.svg")}
            alt="nodejs"
          />
        </div>
        <div className="AboutUs__tecnologias__containerImg">
          <img
            className="img1"
            src={require("../../utils/react.svg")}
            alt="react"
          />
        </div>
        <div className="AboutUs__tecnologias__containerImg">
          <img
            className="img1"
            src={require("../../utils/linux.svg")}
            alt="linux"
          />
        </div>
        <div className="AboutUs__tecnologias__containerImg">
          <img
            className="img1"
            src={require("../../utils/sass.svg")}
            alt="sass"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
