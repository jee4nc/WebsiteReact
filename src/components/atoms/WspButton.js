import React from "react";
import "../../sass/Wsp.scss";

function WspButton() {
  return (
    <div className="containerwsp">
      <a
        href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202."
        className="float"
        // eslint-disable-next-line react/jsx-no-target-blank
        target="_blank"
      >
        <i className="fa fa-whatsapp my-float"></i>
      </a>
    </div>
  );
}
export default WspButton;
