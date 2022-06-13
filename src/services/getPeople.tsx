/* eslint-disable no-param-reassign */
/* eslint-disable no-await-in-loop */
import axios from "axios";
import { People } from "../types/People";

const API_URL = "https://swapi.dev/api/people/";

// Create an ID from the url para
const createId = (url: string) => url.split("/").at(-2);

// Transform the response to add an ID to the original response
const transformResponse = (results: People) => {
  if (Array.isArray(results)) {
    const transformedData = results.map((item) => {
      item.id = Number(createId(item.url));
      return item;
    });
    return transformedData;
  }
  return [];
};

const getPeople = async () => {
  let currentURL = API_URL;
  let characters: Array<People> = [];

  while (currentURL) {
    const {
      data: { next, results },
    } = await axios(currentURL);
    currentURL = next;
    const resultsWithId = transformResponse(results);
    characters = [...characters, ...resultsWithId];
  }
  return characters;
};

export default getPeople;
