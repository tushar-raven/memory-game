//import { useState } from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { handleCardClick, img, name } = props;

  return (
    <div className="card" onClick={handleCardClick}>
      <img className="card-image" src={img}></img>
      <div className="name">{name}</div>
    </div>
  );
};

Card.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  img: PropTypes.any,
  name: PropTypes.any,
};

export default Card;
