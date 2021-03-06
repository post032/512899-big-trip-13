import {getRandomIntenger} from "../utils/common";
export const generateCity = () => {
  const cities = [`Amsterdam`, `Geneva`, `Chamonix`];
  const randomIndex = getRandomIntenger(0, cities.length - 1);
  return cities[randomIndex];
};

export const generateTypePoint = () => {
  const typePoints = [`taxi`, `bus`, `train`, `ship`, `transport`, `drive`, `flight`, `check-in`, `sightseeing`, `restaurant`];
  const randomIndex = getRandomIntenger(0, typePoints.length - 1);
  return typePoints[randomIndex];
};

const prices = [];
const PRICES_COUNT = 210;
for (let i = 10; i < PRICES_COUNT; i = i + 10) {
  prices.push(i);
}
export const generatePrice = () => {
  const randomPriceIndex = getRandomIntenger(0, prices.length - 1);
  return prices[randomPriceIndex];
};

export const getRandomDuration = () => {
  const startTime = +new Date(+(new Date()) - Math.floor(Math.random() * 10000000000));
  const maxEndTime = +new Date(startTime).setHours(42);
  const endTime = +new Date(startTime + Math.random() * (maxEndTime - startTime));
  return {
    startTime,
    endTime
  };
};

export const generateOffers = () => {
  const names = [`Lunch in city`, `Book tickets`, `Add breakfast`, `Rent a car`, `Switch to comfort`, `Add luggage`, `Order Uber`];
  const OFFERS_COUNT = 3;
  const offers = [];
  for (let i = 0; i < OFFERS_COUNT; i++) {
    const randomIndex = getRandomIntenger(0, names.length - 1);
    offers.push({
      name: names[randomIndex],
      offersPrice: generatePrice()
    });
  }
  return offers;
};


export const generateDescription = () => {
  const description = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`];
  const randomIndex = getRandomIntenger(0, description.length - 1);
  return description[randomIndex];
};
