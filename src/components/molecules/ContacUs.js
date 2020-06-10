import React from "react";
import emailjs from "emailjs-com";
import "../../sass/Contact.scss";
import Zoom from "react-reveal/Zoom";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmailj", "test1", e.target, "user_zWOk6AlMRHvU5HEskUp4D")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="big_container">
      <div className="big_container__title">Comunicate con nosotros!</div>
      <Zoom>
        <form className="contact_form" onSubmit={sendEmail}>
          {/* <div className="contact_form__image">
            <img src="./../../utils/ws.svg" className="image" alt="wsp"></img>
          </div> */}
          <div className="contact_form__information">
            <div className="contact__name">
              <div className="labell">
                <label>Nombre</label>
              </div>
              <input className="inputc" type="text" name="user_name" />
            </div>
            <div className="contact_form__number">
              <div className="labell">
                <label>Numero</label>
              </div>
              <input className="inputc2" type="text" name="contact_number" />
            </div>
            <div className="contact__email">
              <div className="labell">
                <label>Email de contacto</label>
              </div>
              <input className="inputc" type="email" name="user_email" />
            </div>
            <div className="contact__message">
              <div className="labell">
                <label>Mensaje breve sobre tu duda</label>
              </div>
              <textarea name="message" className="text_area" />
            </div>
            <div>
              <input type="submit" value="Send" />
            </div>
          </div>
        </form>
      </Zoom>
    </div>
  );
}
