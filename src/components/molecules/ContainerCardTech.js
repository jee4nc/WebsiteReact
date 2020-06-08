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
      <div>
        {this.state.lista.map((e) => (
          <Zoom>
            <CardTech src={e.src} alit={e.alt} />
          </Zoom>
        ))}
        <div>{this.state.lista.map((e) => console.log(e.src, e.alt))}</div>
      </div>
    );
  }
}
export default ContainerCardTech;
