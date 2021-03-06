import {POINT_COUNT} from "./constant";
import {generateTypePoint, generateCity, getRandomDuration, generatePrice, generateDescription, generateOffers} from "../utils/point";
import {getRandomIntenger} from "../utils/common";
export const generateRoutPoint = () => {
  const {startTime, endTime} = getRandomDuration();
  return {
    typePoint: generateTypePoint(),
    city: generateCity(),
    description: generateDescription(),
    offers: generateOffers(),
    price: generatePrice(),
    startTime,
    endTime,
    isFavorite: Boolean(getRandomIntenger(0, 1))
  };
};

export const points = new Array(POINT_COUNT).fill().map(generateRoutPoint);
