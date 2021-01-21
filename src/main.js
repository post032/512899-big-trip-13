import MenuView from './view/menu';
import FilterView from "./view/filter";
import RoutInfoView from "./view/route-info";
import PriceView from "./view/price";
import SortView from './view/sort';
import EditPointView from './view/edit-point';
import PointView from './view/point';
import {points} from "./mock/data";
import {render, RenderPosition, replace} from "./utils/render";
import NoPointView from "./view/no-point";

const renderPoint = (tripEventsLists, point) => {
  const pointComponent = new PointView(point);
  const editPointComponent = new EditPointView(point);
  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      replace(editPointComponent, pointComponent);
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  pointComponent.setEditClickHandler(() => {
    replace(editPointComponent, pointComponent);
    document.addEventListener(`keydown`, onEscKeyDown);
  });

  editPointComponent.setEditClickHandler(() => {
    replace(pointComponent, editPointComponent);
    document.removeEventListener(`keydown`, onEscKeyDown);
  });

  editPointComponent.setFormSubmitHandler(() => {
    replace(pointComponent, editPointComponent);
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
render(tripControl, new MenuView().getElement(), RenderPosition.AFTERBEGIN);
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

