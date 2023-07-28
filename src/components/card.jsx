import PropTypes from "prop-types";

const Card = ({ handleCardClick, card }) => {
  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="card" onClick={handleCardClick}>
      <img className="card-image" src={card.image} alt="Card" />
      <div className="name">{card.name}</div>
    </div>
  );
};

Card.propTypes = {
  handleCardClick: PropTypes.func.isRequired,
  card: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Card;
