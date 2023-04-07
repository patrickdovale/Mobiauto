import axios from "axios";

const URL = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

const getRickAndMortyCharacters = async (characters) => {
  try {
    const response = await URL.get("/character/" + characters.join(","));
    return response;
  } catch (error) {
    return error;
  }
};

export default getRickAndMortyCharacters;
