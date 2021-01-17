import SiteMenuView from './view/menu';
import FilterView from "./view/filter";
import RoutInfoView from "./view/route-info";
import PriceView from "./view/price";
import SortView from './view/sort';
import EditPointView from './view/edit-point';
import PointView from './view/point';
import {points} from "./mock/data";
import {render, RenderPosition} from "./mock/utils";

const renderPoint = (tripEventsLists, point) => {
  const pointComponent = new PointView(point);
  const editPointComponent = new EditPointView(point);
  const replaceEditPointToPoint = () => {
    tripEventsLists.replaceChild(editPointComponent.getElement(), pointComponent.getElement());
  };
  const replacePointToEditPoint = () => {
    tripEventsLists.replaceChild(pointComponent.getElement(), editPointComponent.getElement());
  };
  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replacePointToEditPoint();
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  pointComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replaceEditPointToPoint();
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  editPointComponent.getElement().querySelector(`.event__rollup-btn`).addEventListener(`click`, () => {
    replacePointToEditPoint();
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  editPointComponent.getElement().querySelector(`form`).addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    replacePointToEditPoint();
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
points.forEach((point) => {
  renderPoint(tripEventsLists, point);
});
