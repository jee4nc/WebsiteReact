import React from "react";
import Proptypes from "prop-types";

const CardsTech = ({ src, alt }) => (
  <div className="card">
    <img
      className="cardImage"
      src={require("../../utils/angular.svg")}
      alt={alt}
    />
  </div>
);

CardsTech.propTypes = {
  src: Proptypes.string,
  alt: Proptypes.string,
};
export default CardsTech;
