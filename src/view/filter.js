import {filters} from "./data";
export const createFilterTemplate = () =>
  `<h2 class="visually-hidden">Filter events</h2>
    <form class="trip-filters" action="#" method="get">
      ${filters.map((filter) => `<div class="trip-filters__filter">
        <input id="filter-${filter.id}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked="">
        <label class="trip-filters__filter-label" for="filter-${filter.id}">${filter.name}</label>
      </div>`)};
      <button class="visually-hidden" type="submit">Accept filter</button>
    </form>`;

