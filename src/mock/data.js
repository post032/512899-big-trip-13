import {POINT_COUNT, EDIT_COUNT} from "./constant";

const getRandomIntenger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
const generateCities = () => {
  const cities = [`Amsterdam`, `Geneva`, `Chamonix`];
  const randomIndex = getRandomIntenger(0, cities.length - 1);
  return cities[randomIndex];
};

const generateTypePoint = () => {
  const typePoints = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];
  const randomIndex = getRandomIntenger(0, typePoints.length - 1);
  return typePoints[randomIndex];
};

const prices = [];
const PRICES_COUNT = 210;
for (let i = 10; i < PRICES_COUNT; i = i + 10) {
  prices.push(i);
}
const generatePrice = () => {
  const randomPriceIndex = getRandomIntenger(0, prices.length - 1);
  return prices[randomPriceIndex];
};

const generateOffers = () => {
  const names = [`Lunch in city`, `Book tickets`, `Add breakfast`, `Rent a car`, `Switch to comfort`, `Add luggage`, `Order Uber`];
  const OFFERS_COUNT = 3;
  const offers = [];
  for (let i = 0; i < OFFERS_COUNT; i++) {
    const randomIndex = getRandomIntenger(0, names.length - 1);
    offers.push({
      name: names[randomIndex],
      price: generatePrice()
    });
  }
  return offers;
};

const generateDescription = () => {
  const description = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`];
  const randomIndex = getRandomIntenger(0, description.length - 1);
  return description[randomIndex];
};


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
