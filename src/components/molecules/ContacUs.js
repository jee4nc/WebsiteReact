import React from "react";
import "../../sass/Contact.scss";
import Zoom from "react-reveal/Zoom";
import SendEmail from "../atoms/SendEmail";

export default class ContactUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      numero: "",
      email: "",
      mensaje: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.cambioNumero = this.cambioNumero.bind(this);
    this.cambioEmail = this.cambioEmail.bind(this);
    this.cambioMensaje = this.cambioMensaje.bind(this);
    this.limpiarInputs = this.limpiarInputs.bind(this);
    this.limpiaryesperar = this.limpiaryesperar.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="big_container">
        <div className="big_container__title">Comunicate con nosotros!</div>
        <Zoom>
          <form
            className="contact_form"
            onSubmit={this.limpiaryesperar}
            id="create-course-form"
          >
            <div className="contact_form__information">
              <div className="contact__name">
                <div className="labell">
                  <label>Nombre</label>
                </div>
                <input
                  className="inputc"
                  type="text"
                  name="user_name"
                  onChange={this.handleChange}
                  value={this.state.name}
                  required
                />
                {console.log(` El valor de name es: ${this.state.name}`)}
                {console.log(` El valor de numero es: ${this.state.numero}`)}
                {console.log(` El valor de email es: ${this.state.email}`)}
                {console.log(` El valor de mensaje es: ${this.state.mensaje}`)}
              </div>
              <div className="contact_form__number">
                <div className="labell">
                  <label>Numero</label>
                </div>
                <input
                  className="inputc2"
                  type="text"
                  name="contact_number"
                  value={this.state.numero}
                  onChange={this.cambioNumero}
                  required
                />
              </div>
              <div className="contact__email">
                <div className="labell">
                  <label>Email de contacto</label>
                </div>
                <input
                  className="inputc"
                  type="email"
                  name="user_email"
                  value={this.state.email}
                  onChange={this.cambioEmail}
                  required
                />
              </div>
              <div className="contact__message">
                <div className="labell">
                  <label>Mensaje breve sobre tu duda</label>
                </div>
                <textarea
                  name="message"
                  className="text_area"
                  required
                  value={this.state.mensaje}
                  onChange={this.cambioMensaje}
                />
              </div>
              <div>
                <input type="submit" value="Send" />
                <input
                  type="submit"
                  value="limpiar"
                  onClick={this.limpiarInputs}
                />
              </div>
            </div>
          </form>
        </Zoom>
      </div>
    );
  }

  cambioNumero(e) {
    this.setState({
      numero: e.target.value,
    });
  }
  cambioEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  cambioMensaje(e) {
    this.setState({
      mensaje: e.target.value,
    });
  }

  limpiaryesperar(e) {
    SendEmail(e);
    if (SendEmail) {
      this.limpiarInputs();
    }
  }
  limpiarInputs = () => {
    this.setState({
      name: "",
      numero: "",
      email: "",
      mensaje: "",
    });
  };
}
