import {filters} from '../mock/constant';
import {createElement} from "../mock/utils";
const createSortTemplate = () =>
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
${filters.map((filter) => `<div class="trip-sort__item  trip-sort__item--day">
      <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" ${filter.checked}">
      <label class="trip-sort__btn" for="sort-day">${filter.name}</label>
    </div>`).join(``)}
  </form>`;

export default class Sort {
  constructor() {
    this._element = null;
  }
  getTemplate() {
    return createSortTemplate();
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
