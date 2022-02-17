const requests = {
  fetchCharacters: "v1/characters",
  fetchMaleCharacters: "v1/characters/search?gender=male",
  fetchFemaleCharacters: "v1/characters/search?gender=female",
  fetchRandomCharacter: "v1/characters/random",
  fetchGame: "v1/games",
};

export default requests;
