import { useState, useEffect } from "react";
import Card from "./Card";
import Header from "./Header";
import getCards from "./Assets";

const Container = () => {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [shouldShuffle, setShouldShuffle] = useState(true);
  const [card, setCard] = useState([]);

  useEffect(() => {
    const fetchAssets = async () => {
      const results = await getCards();
      setCard(results);
    };

    fetchAssets();

    return () => {
      setCard([]);
    };
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
    setCard((prevClick) => {
      const cards = [...prevClick];
      for (let i = 0; i < cards.length; i++) {
        cards[i]["isClicked"] = false;
      }
      return cards;
    });
    setShouldShuffle(true);
  };

  const shuffleCards = () => {
    setCard((prevClicked) => {
      const cards = [...prevClicked];
      let currentIndex = cards.length,
        randomIndex;

      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[currentIndex], cards[randomIndex]] = [
          cards[randomIndex],
          cards[currentIndex],
        ];
      }
      console.log(cards);
      return cards;
    });
  };

  const handleCardClick = (cardIndex) => {
    if (!card[cardIndex].isClicked) {
      setCard((prevClicked) => {
        const updatedClicked = [...prevClicked];
        updatedClicked[cardIndex].isClicked = true;
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
        card={card ? card[i] : null}
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
