import SiteMenuView from './view/menu';
import FilterView from "./view/filter";
import RoutInfoView from "./view/route-info";
import PriceView from "./view/price";
import SortView from './view/sort';
import EditPointView from './view/edit-point';
import PointView from './view/point';
import {points} from "./mock/data";
import {render, RenderPosition} from "./mock/utils";
import NoPointView from "./view/no-point";

const renderPoint = (tripEventsLists, point) => {
  const pointComponent = new PointView(point);
  const editPointComponent = new EditPointView(point);
  const replaceViewToEdit = () => {
    tripEventsLists.replaceChild(editPointComponent.getElement(), pointComponent.getElement());
  };
  const replaceEditToView = () => {
    tripEventsLists.replaceChild(pointComponent.getElement(), editPointComponent.getElement());
  };
  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replaceEditToView();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  pointComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceViewToEdit();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  editPointComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceEditToView();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  editPointComponent.getElement().querySelector(`form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replaceEditToView();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });
  render(tripEventsLists, pointComponent.getElement(), RenderPosition.AFTERBEGIN);
};

const headerElement = document.querySelector(`header`);
const tripInfo = headerElement.querySelector(`.trip-info`);
const mainElement = document.querySelector(`main`);
const tripControl = headerElement.querySelector(`.trip-controls`);
const tripEvents = mainElement.querySelector(`.trip-events h2`);
const tripEventsLists = mainElement.querySelector(`.trip-events__list`);


render(tripInfo, new PriceView().getElement(), RenderPosition.AFTERBEGIN);
render(tripInfo, new RoutInfoView().getElement(), RenderPosition.AFTERBEGIN);
render(tripControl, new SiteMenuView().getElement(), RenderPosition.AFTERBEGIN);
render(tripControl, new FilterView().getElement(), RenderPosition.BEFOREEND);
render(tripEvents, new SortView().getElement(), RenderPosition.AFTERBEGIN);
render(tripEventsLists, new NoPointView().getElement(), RenderPosition.AFTERBEGIN);

if (points.length === 0) {
  render(tripEventsLists, new NoPointView().getElement(), RenderPosition.AFTERBEGIN);
} else {
  points.forEach((point) => {
    renderPoint(tripEventsLists, point);
  });
}

