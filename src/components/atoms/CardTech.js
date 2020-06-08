import React from "react";
import Proptypes from "prop-types";
import "../../sass/AboutUs.scss";

const CardsTech = (props) => (
  <div className="card">
    <img className="cardImage" src={props.src} alt={props.alt} />
  </div>
);

CardsTech.propTypes = {
  src: Proptypes.string,
  alt: Proptypes.string,
};
export default CardsTech;
