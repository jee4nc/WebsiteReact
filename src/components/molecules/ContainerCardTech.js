import React from "react";
import CardTech from "../atoms/CardTech";
import CardList from "../atoms/CardList";
import Zoom from "react-reveal/Zoom";

class ContainerCardTech extends React.Component {
  state = {
    lista: CardList,
  };
  render() {
    return (
      <div className="Container__CardTech">
        {this.state.lista.map((e) => (
          <Zoom key={e.src}>
            <CardTech
              className="Container__CardTech__img"
              key={e.alt}
              src={e.src}
              alit={e.alt}
            />
          </Zoom>
        ))}
      </div>
    );
  }
}
export default ContainerCardTech;
