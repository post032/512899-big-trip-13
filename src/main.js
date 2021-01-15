import SiteMenuView from './view/menu';
import {createRouteInfoTemplate} from './view/route-info';
import {createPriceTemplate} from './view/price';
import {createFilterTemplate} from './view/filter';
import {createSortTemplate} from './view/sort';
import {createEditPointTemplate} from './view/edit-point';
import {createPointTemplate} from './view/point';
import {points} from "./mock/data";
import {renderTemplate, renderElement, RenderPosition} from "./mock/utils";

const headerElement = document.querySelector(`header`);
const tripInfo = headerElement.querySelector(`.trip-info`);
const mainElement = document.querySelector(`main`);
const tripControl = headerElement.querySelector(`.trip-controls`);
const tripEvents = mainElement.querySelector(`.trip-events h2`);
const tripEventsLists = mainElement.querySelector(`.trip-events__list`);

renderTemplate(tripInfo, createPriceTemplate(), `afterBegin`);
renderTemplate(tripInfo, createRouteInfoTemplate(), `afterBegin`);
renderTemplate(tripControl, createFilterTemplate(), `afterBegin`);
renderElement(tripControl, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);
renderTemplate(tripEvents, createSortTemplate(), `afterEnd`);
renderTemplate(tripEventsLists, createEditPointTemplate(points[0]), `afterBegin`);
points.forEach((point) => {
  renderTemplate(tripEventsLists, createPointTemplate(point), `beforeEnd`);
});
