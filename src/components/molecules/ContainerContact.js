import React from "react";
import Zoom from "react-reveal/Zoom";
import "../../sass/CImage.scss";

class ContainerContact extends React.Component {
  render() {
    return (
      <Zoom>
        <div className="tile"> Contactate con nosotros!</div>
        <div className="Container__Contact">
          <a
            href="https://www.google.cl"
            className="Con_Image__a"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <img alt="wsp" src="./../../utils/ws.svg" />
          </a>
          <a
            href="https://www.google.cl"
            className="Con_Image__a"
            // eslint-disable-next-line react/jsx-no-target-blank
            target="_blank"
          >
            <img alt="insta" src="./../../utils/insta.svg" />
          </a>
        </div>
      </Zoom>
    );
  }
}
export default ContainerContact;
