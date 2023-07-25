import Card from "./card";
import Header from "./header";
import { useState } from "react";

const Container = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  // const [level, setLevel] = useState(4);

  const handleScore = () => {
    setScore(score + 1);
  };

  const gameOver = () => {
    setBestScore(score);
    setScore(0);
  };

  let cardArray = [];
  for (let i = 0; i < 4; i++) {
    cardArray.push(
      <Card handleScore={handleScore} gameOver={gameOver} key={i} />
    );
  }

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <div className="container">{cardArray.map((card) => card)}</div>
    </div>
  );
};

export default Container;
