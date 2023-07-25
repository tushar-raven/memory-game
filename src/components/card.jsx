import { useState } from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  const [isclicked, setIsClicked] = useState(false);
  const { handleScore, gameOver } = props;

  function handleClick() {
    if (isclicked === false) {
      setIsClicked(true);
      handleScore();
    } else {
      gameOver();
      setIsClicked(false);
    }
  }

  console.log(isclicked);
  return (
    <div className="card" onClick={handleClick}>
      <img></img>
      <div></div>
    </div>
  );
};

Card.propTypes = {
  handleScore: PropTypes.func.isRequired,
  gameOver: PropTypes.func.isRequired,
};

export default Card;
