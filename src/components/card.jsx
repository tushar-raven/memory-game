//import { useState } from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { handleCardClick, card } = props;
  console.log(card);
  return (
    <div className="card" onClick={handleCardClick}>
      <img className="card-image" src={card["image"]}></img>
      <div className="name">{card.name}</div>
    </div>
  );
};

Card.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  card: PropTypes.any,
};

export default Card;
