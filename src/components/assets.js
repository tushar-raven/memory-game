async function getAssets() {
  const response = await fetch("https://rickandmortyapi.com/api/character");

  const data = await response.json();
  const nameArray = [];
  const imageArray = [];
  const assetObj = {};
  for (let i = 0; i < 16; i++) {
    nameArray.push(data.results[i].name);
    imageArray.push(data.results[i].image);
  }
  assetObj["name"] = nameArray;
  assetObj["image"] = imageArray;
  return assetObj;
}

export default getAssets;
