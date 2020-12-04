import {createRouteInfoTemplate} from './view/route-info.js';
import {createPriceTemplate} from './view/price';
import {createFilterTemplate} from './view/filter';
import {createMenuTemplate} from './view/menu';
import {createSortTemplate} from './view/sort';
// import {createEditPointTemplate} from './view/edit-point';
import {createAddPointTemplate} from './view/add-point';
import {createPointTemplate} from './view/point';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const TASK_COUNT = 3;

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
render(tripEventsLists, createAddPointTemplate(), `afterBegin`);
// render(tripEventsLists, createEditPointTemplate(), `afterBegin`);
for (let i = 0; i < TASK_COUNT; i++) {
  render(tripEventsLists, createPointTemplate(), `beforeEnd`);
}

