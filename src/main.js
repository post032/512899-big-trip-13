import {createRouteInfoTemplate} from './view/route-info';
import {createPriceTemplate} from './view/price';
import {createFilterTemplate} from './view/filter';
import {createMenuTemplate} from './view/menu';
import {createSortTemplate} from './view/sort';
import {createEditPointTemplate} from './view/edit-point';
import {createPointTemplate} from './view/point';
import {points} from "./mock/data";
const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};


const headerElement = document.querySelector(`header`);
const tripInfo = headerElement.querySelector(`.trip-info`);
const mainElement = document.querySelector(`main`);
const tripControl = headerElement.querySelector(`.trip-controls`);
const tripEvents = mainElement.querySelector(`.trip-events h2`);
const tripEventsLists = mainElement.querySelector(`.trip-events__list`);

render(tripInfo, createPriceTemplate(),`afterBegin`);
render(tripInfo, createRouteInfoTemplate(), `afterBegin`);
render(tripControl, createFilterTemplate(), `afterBegin`);
render(tripControl, createMenuTemplate(), `afterBegin`);
render(tripEvents, createSortTemplate(), `afterEnd`);
render(tripEventsLists, createEditPointTemplate(points[0]), `afterBegin`);
points.forEach((point) => {
  render(tripEventsLists, createPointTemplate(point), `beforeEnd`);
});
