import React from "react";
import "../../sass/Benefits.scss";
import Zoom from "react-reveal/Zoom";
class BenefitsTextImage extends React.Component {
  render() {
    return (
      <div className="BContainer">
        <div className="BContainer__Text">
          <p>
            NJ Solutions te ofrece una solución a medida, trabajamos solo con
            tecnologias modernas, para mantenernos a la vanguardia y ofrecer la
            mejor de las opciones aprovechando las bondades de las innovaciones
            en el mundo de la programacion. NJ Solutions te ofrece una solución
            a medida, trabajamos solo con tecnologias modernas, para mantenernos
            a la vanguardia y ofrecer la mejor de las opciones aprovechando las
            bondades de las innovaciones en el mundo de la programacion.
          </p>
        </div>
        <div className="BContainer__IMG">
          <Zoom>
            <img
              className="BContainer__IMG__IMG"
              src="../../utils/development.svg"
              alt="development"
            />
          </Zoom>
        </div>
      </div>
    );
  }
}
export default BenefitsTextImage;
