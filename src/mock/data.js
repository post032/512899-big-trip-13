import {POINT_COUNT, EDIT_COUNT} from "./constant";
import {generateTypePoint, generateCities, generateDescription, generateOffers, getRandomIntenger} from "./utils";
export const generateRoutPoint = () => {
  return {
    typePoint: generateTypePoint(),
    cities: generateCities(),
    description: generateDescription(),
    offers: generateOffers(),
    isFavorite: Boolean(getRandomIntenger(0, 1))
  };
};

export const points = new Array(POINT_COUNT).fill().map(generateRoutPoint);
export const pointsEdit = new Array(EDIT_COUNT).fill().map(generateRoutPoint);
