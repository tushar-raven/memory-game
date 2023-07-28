import Card from "./Card";
import Header from "./Header";
import getAssets from "./assets";
import { useState, useEffect } from "react";

const Container = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardClicked, setCardClicked] = useState(Array(15).fill(false));
  const [shouldShuffle, setShouldShuffle] = useState(true);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const results = await getAssets();
      setCard(results);
    };

    fetchAssets();
  }, []);

  console.log(card);

  useEffect(() => {
    if (shouldShuffle) {
      shuffleCards();
      setShouldShuffle(false);
    }
  }, [shouldShuffle]);

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1);
    setShouldShuffle(true);
  };

  const gameOver = () => {
    setBestScore((prevScore) => Math.max(prevScore, score));
    setScore(0);
    setCardClicked(Array(15).fill(false));
    setShouldShuffle(true);
  };

  const shuffleCards = () => {
    setCardClicked((prevClicked) => {
      const shuffledClicked = [...prevClicked];
      shuffledClicked.sort(() => Math.random() - 0.5);
      return shuffledClicked;
    });
  };

  const handleCardClick = (cardIndex) => {
    if (!cardClicked[cardIndex]) {
      setCardClicked((prevClicked) => {
        const updatedClicked = [...prevClicked];
        updatedClicked[cardIndex] = true;
        return updatedClicked;
      });
      handleScore();
    } else {
      gameOver();
    }
  };

  const cardArray = [];

  for (let i = 0; i < 15; i++) {
    cardArray.push(
      <Card
        handleCardClick={() => handleCardClick(i)}
        key={i}
        isClicked={cardClicked[i]}
        card={card[i]}
      />
    );
  }

  return (
    <div>
      <Header score={score} bestScore={bestScore} />
      <div className="container">{cardArray}</div>
    </div>
  );
};

export default Container;
