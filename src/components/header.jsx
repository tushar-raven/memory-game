import "../App.css";
import PropTypes from "prop-types";

const Header = (props) => {
  const { score, bestScore } = props;

  return (
    <div className="header">
      <div className="header-text">Pokemon Memory Game</div>
      <div>
        <div>Score: {score}</div>
        <div>Best Score: {bestScore}</div>
      </div>
    </div>
  );
};

Header.propTypes = {
  score: PropTypes.number,
  bestScore: PropTypes.number,
};
export default Header;
