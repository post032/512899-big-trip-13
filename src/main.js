import {createRouteInfoTemplate} from "./view/route-info.js";
import {createPriceTemplate} from "./view/price";
import {createFilterTemplate} from "./view/filter";
import {createMenuTemplate} from "./view/menu";
import {createSortTemplate} from "./view/sort";
import {createFormEditTemplate} from "./view/edit-point";
import {createPointTemplate} from "./view/point";

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const TASK_COUNT = 3;

const HEADER_ELEMENT = document.querySelector(`header`);
const TRIP_INFO = HEADER_ELEMENT.querySelector(`.trip-info`);
const MAIN_ELEMENT = document.querySelector(`main`);
const TRIP_CONTROL = HEADER_ELEMENT.querySelector(`.trip-controls`);
const TRIP_EVENTS = MAIN_ELEMENT.querySelector(`.trip-events h2`);
const TRIP_EVENTS_LISTS = MAIN_ELEMENT.querySelector(`.trip-events__list`);

render(TRIP_INFO, createPriceTemplate(),`afterBegin`);
render(TRIP_INFO, createRouteInfoTemplate(), `afterBegin`);
render(TRIP_CONTROL, createFilterTemplate(), `afterBegin`);
render(TRIP_CONTROL, createMenuTemplate(), `afterBegin`);
render(TRIP_EVENTS, createSortTemplate(), `afterEnd`);
render(TRIP_EVENTS_LISTS, createFormEditTemplate(), `afterBegin`);
for (let i = 0; i < TASK_COUNT; i++) {
  render(TRIP_EVENTS_LISTS, createPointTemplate(), `beforeend`);
}

