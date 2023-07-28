async function getCards() {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const data = await response.json();
  const card = [];
  for (let i = 0; i < 15; i++) {
    const cardObj = {};
    cardObj["name"] = data.results[i].name;
    cardObj["image"] = data.results[i].image;
    cardObj.isClicked = false;
    card.push(cardObj);
  }
  return card;
}

export default getCards;
