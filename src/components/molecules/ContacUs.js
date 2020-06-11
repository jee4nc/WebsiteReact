import React from "react";
import "../../sass/Contact.scss";
import Zoom from "react-reveal/Zoom";
import SendEmail from "../atoms/SendEmail";

export default class ContactUs extends React.Component {
  render() {
    return (
      <div className="big_container">
        <div className="big_container__title">Comunicate con nosotros!</div>
        <Zoom>
          <form
            className="contact_form"
            onSubmit={SendEmail}
            id="create-course-form"
          >
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
}
