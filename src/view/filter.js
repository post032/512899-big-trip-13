import AbstractView from "./abstract";
import {filtersTime} from "../mock/constant";

const createFilterTemplate = () =>
  `<form class="trip-filters" action="#" method="get">
    ${filtersTime.map((filterTime) => `<div class="trip-filters__filter">
          <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterTime}" checked="">
            <label class="trip-filters__filter-label" for="filter-${filterTime}">${filterTime}</label>
        </div>`).join(``)}
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;

export default class Filter extends AbstractView {
  getTemplate() {
    return createFilterTemplate();
  }
}
